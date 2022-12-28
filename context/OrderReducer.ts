
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_DELIVERY_DETAILS } from "./types";

export default (state:any, action:any) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_CART_ITEM:
        const updatedCartItems = [...state.cartItems , payload];
        const totalAmount = updatedCartItems.reduce((acc:any,current:any) => acc + current.price,0)
      return {
        ...state,
        cartItems: [...state.cartItems , payload],
        totalAmount:totalAmount
      };
    case REMOVE_CART_ITEM:
        const filteredCartItems = state.cartItems.filter((item:any) => item.id !== payload)
        const newAmount = filteredCartItems.reduce((acc:any,current:any) => acc + current.price,0)

      return {
        ...state,
        cartItems: filteredCartItems,
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