import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // getAuth,
import { auth } from '../firebase'; //, authOld, createUserProfileDocument
export const UserContext = createContext();

// const auth = getAuth();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { //console.log("UserContextProvider:: useEffect");
    // const unsubscribeFromAuth_Old = authOld.onAuthStateChanged(async userAuth => {
    //   console.log("onAuthStateChanged:: userAuth:", userAuth);
    //   if(userAuth) { const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setUser({ id: snapShot.id, ...snapShot.data() }); setLoading(false);
    //     });
    //   } else { setUser(userAuth); setLoading(false); }
    // });
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      console.log("onAuthStateChanged:: userAuth:", userAuth);
      if(userAuth) { //const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot(snapShot => {
        //   setUser({ id: snapShot.id, ...snapShot.data() }); setLoading(false);
        // });
        const { uid, displayName, email } = userAuth;
        setUser({ uid, displayName, email }); setLoading(false);
      } else { setUser(null); setLoading(false); }
    });
    return unsubscribeFromAuth(); //unsubscribeFromAuth_Old();
  }, []); //auth
  const userContext = { user, loading, setUser };
  //if(loading) return <div>Loading...</div>;
  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
