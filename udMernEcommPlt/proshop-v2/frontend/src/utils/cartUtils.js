export const addDecimals = (num) => (Math.round(num * 100)/100).toFixed(2);

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc,item) => acc+item.price*item.qty, 0)
  );
  // Calculate shipping price (if order is over 100$ then free, else 10$ shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  // Calculate tax price (15% tax)
  state.taxPrice = addDecimals(state.itemsPrice * 0.15); //Number()
  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
