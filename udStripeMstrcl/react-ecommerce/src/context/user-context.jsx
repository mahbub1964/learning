import { createContext, useEffect, useState } from 'react';
import { authOld, authNew, createUserProfileDocument } from '../firebase';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { console.log("UserContextProvider:: useEffect");
    const unsubscribeFromAuth = authOld.onAuthStateChanged(async userAuth => {
    //const unsubscribeFromAuth = auth.onIdTokenChanged(async userAuth => {
      console.log("onAuthStateChanged:: userAuth:", userAuth);
      if(userAuth) { const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({ id: snapShot.id, ...snapShot.data() }); setLoading(false);
        });
      } else { setUser(userAuth); setLoading(false); }
    });
    //unsubscribeFromAuth(); console.log("Ran unsubscribeFromAuth()");
    return unsubscribeFromAuth();
  }, []); //auth
  const userContext = { user, loading };
  //if(loading) return <div>Loading...</div>;
  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
