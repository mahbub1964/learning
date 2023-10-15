import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
// import { authOld } from '../../firebase'; //, auth
import { UserContext } from '../../context/user-context';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss';

const Header = () => { //console.log("Header");
  const { user, setUser } = useContext(UserContext); //console.log("user:", user);
  const auth = getAuth(); //console.log("Header:: auth:", auth);
  //console.log("Header:: auth.currentUser:", auth.currentUser);

  useEffect(() => {
    if(auth.currentUser) { const { uid, displayName, email } = auth.currentUser;
      setUser({ uid, displayName, email });
    } else setUser(null);
  }, [auth.currentUser]);

  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>NOMAD</Link>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        {!user && <li><Link to='/sign-in'>Sign In</Link></li>}
        {!user && <li><Link to='/sign-up'>Sign Up</Link></li>}
        {user && <li onClick={async () => { //console.log("Signing Out"); //authOld.signOut();
          await signOut(auth); setUser(null); }}>Sign Out</li>}
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
