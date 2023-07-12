
import { createSlice, createSelector } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  deliveryPrice: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find((item) => item.product.id === newProduct.id)
      if (cartItem){
        cartItem.quantity +=1;
    }else{
        state.items.push({ product: newProduct, quantity: 1 });
    }
  },
  changeQuantity: (state, action) => {
    const {productId,amount } = action.payload;
    const cartItem = state.items.find((item) => item.product.id === productId)
    if(cartItem){
        cartItem.quantity+=amount;
    }if(cartItem.quantity<=0){
        state.items = state.items.filter((item) => item !== cartItem)            
    }
},
},
})


export const selectNumberOfItems = (state) => state.cart.items.length;
export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  export const selectSelf = (state) => state.cart;
  export const selectDeliveryPrice = createSelector(
    selectSelf,
    selectSubtotal,
    (state, subtotal) =>
      subtotal > state.freeDeliveryFrom ? 0 : state.deliveryPrice
  );
  
  export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryPrice,
    (subtotal, delivery) => subtotal + delivery
  );