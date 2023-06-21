import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo.png';

const Header = () => {
  const dispatch = useDispatch(), navigate = useNavigate();
  const [ logoutApiCall ] = useLogoutMutation();
  const { cartItems } = useSelector(state => state.cart); //console.log(cartItems);
  const { userInfo } = useSelector(state => state.auth);
  const logoutHandler = async () => { console.log("LogoutHandler");
    try {
      await logoutApiCall().unwrap();
      dispatch(logout()); navigate("/login");
    } catch(err) {
      console.log(err);
    }
  }
  return <header>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect> {/* lg */}
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>{/* href="/" */}
            <img src={logo} alt="ProShop" />
            ProShop
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <LinkContainer to="/cart"> */}
              {/* <Nav.Link><FaShoppingCart /> Cart</Nav.Link> */}{/* href="/cart" */}
              <Nav.Link as={Link} to="/cart"><FaShoppingCart /> Cart {cartItems.length>0 && (
                  <Badge pill bg="success" style={{marginLeft:"5px"}}>
                    {cartItems.reduce((a,c)=>a+c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              { userInfo ? (<>
                <Nav.Link as={Link} to="#">{userInfo.name}</Nav.Link>
                <NavDropdown>
                  <NavDropdown.Item>
                    Profile
                    {/* <Nav.Link as={Link} to="/profile">Profile</Nav.Link> */}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>) : (
              // {/* </LinkContainer> */}
              // {/* <LinkContainer to="/login"> */}
                // {/* <Nav.Link><FaUser /> Sign In</Nav.Link> */}    {/* href="/login" */}
                <Nav.Link as={Link} to="/login"><FaUser /> Sign In</Nav.Link>
              // {/* </LinkContainer> */}
              ) }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>;
};
export default Header;
