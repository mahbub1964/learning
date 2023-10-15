import { Routes, Route } from 'react-router-dom'; // Routes instead of Switch
// import Header from './components/header/header';
// import Hero from './components/hero/hero';
// import MainSection from './components/main-section/main-section';
// import FeaturedCollection from './components/featured-collection/featured-collection';
// import Footer from './components/footer/footer';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cart-page';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Canceled from './components/checkout/stripe-checkout/canceled';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import './App.scss';

function App() { //console.log("App");
  return (
    <div className="App">{/* React ecommerce */}
      {/* <Header /><Hero /><MainSection /><FeaturedCollection /><Footer /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        <Route path='/canceled' element={<Canceled />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path ='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
