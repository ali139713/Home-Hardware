
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_DELIVERY_DETAILS } from "./types";

export default (state:any, action:any) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_CART_ITEM:
      const updatedCartItems = [...state.cartItems];
      const updatedItemIndex = updatedCartItems.findIndex(
        item => item.id === payload.id
      );
    
      if (updatedItemIndex < 0) {
        updatedCartItems.push(payload);
      } else {
        const updatedItem = {
          ...updatedCartItems[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCartItems[updatedItemIndex] = updatedItem;
      }
      console.log({updatedCartItems})
      const totalAmount = updatedCartItems.reduce((acc:any,current:any) => acc + current.price * current.quantity,0)
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount:totalAmount
      };
    case REMOVE_CART_ITEM:
      const filteredCart = [...state.cartItems];
      const filteredItemIndex = filteredCart.findIndex(item => item.id === payload);
    
      const updatedItem = {
        ...filteredCart[filteredItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        filteredCart.splice(filteredItemIndex, 1);
      } else {
        filteredCart[filteredItemIndex] = updatedItem;
      }
      const newAmount = filteredCart.reduce((acc:any,current:any) => acc + current.price * current.quantity,0)
      return {
        ...state,
        cartItems: filteredCart,
        totalAmount:newAmount
      };
    case SAVE_DELIVERY_DETAILS:
        return {
            ...state,
            deliveryDetails:payload
        }
    default:
      return state;
  }
};