import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/products-context';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';
import Layout from '../shared/layout';
import withRouter from '../with-router';
import './single-product.styles.scss';

//const SingleProduct = ({ match, history: {push} }) => {
const SingleProduct = ({ params, navigate }) => {
  //const push = history? history.push: null;
  //console.log("SingleProduct:: match:", match, ", history:", history);
  //console.log("SingleProduct:: params:", params, ", navigate:", navigate);
  const { products } = useContext(ProductsContext); //console.log("products:", products);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = params; //match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find(item => Number(item.id)===Number(id));
    // If product does not exist, redirect to shop page
    // if(!product) return push('/shop');
    //if(!product) return push? push('/shop'): null;
    if(!product) return navigate('/shop');
    setProduct(product);
  }, [id, products, navigate]);
  if(!product) return null;
  const {imageUrl, title, price, description} = product;
  const itemInCart = isInCart(product, cartItems);
  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className='add-to-cart-btns'>
            {
              !itemInCart && <button className='button is-white nomad-btn'
              onClick={() => addProduct(product)} id='btn-white-outline'>ADD TO CART</button>
            }
            {
              itemInCart && <button className='button is-white nomad-btn'
              onClick={() => increase(product)} id='btn-white-outline'>ADD MORE</button>
            }
            <button className='button is-black nomad-btn' id='btn-white-outline'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='product-description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
