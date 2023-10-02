import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authOld, authNew } from '../../firebase';
import { UserContext } from '../../context/user-context';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss';

const Header = () => {
  const { user } = useContext(UserContext); console.log("user:", user);
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
        {!!!user && <li onClick={() => {console.log("Signing Out"); authOld.signOut()}
          }>Sign Out</li>}
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
