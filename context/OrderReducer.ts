
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_DELIVERY_DETAILS } from "./types";

export default (state:any, action:any) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_CART_ITEM:
      let updatedCartItems =[...state.cartItems];
      if(updatedCartItems.length === 0){
        updatedCartItems.push(payload)
      }
      else{
        updatedCartItems =  updatedCartItems.map((item:any) => {
          if(item.id === payload.id){
            item.quantity++;
            return item
          }
          return payload;
        } )
      }
      const totalAmount = updatedCartItems.reduce((acc:any,current:any) => acc + current.price * current.quantity,0)
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount:totalAmount
      };
    case REMOVE_CART_ITEM:
      let filteredCartItems =[...state.cartItems];
      filteredCartItems =  state.cartItems.map((item:any) => {
        if(item.id === payload){
          item.quantity--;
          return item
        }
        return item;
      } ).filter((x:any) => x.quantity > 0 );
        const newAmount = filteredCartItems.reduce((acc:any,current:any) => acc + current.price * current.quantity,0)
        console.log({filteredCartItems})
        console.log({newAmount})
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