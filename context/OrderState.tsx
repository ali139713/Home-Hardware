import React, { useReducer } from "react";
import OrderContext from "./OrderContext";
import OrderReducer from "./OrderReducer";
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_DELIVERY_DETAILS } from "./types";

const OrderState = (props:any) => {
  let initialState = {
    cartItems: [],
    deliveryDetails: {},
    totalAmount:0
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const addItemToCart = (item:any) => {
    dispatch({type:ADD_CART_ITEM, payload:item})
  }
  const removeItemFromCart = (itemId:number) => {
    dispatch({type:REMOVE_CART_ITEM, payload:itemId})
  }
  const saveDeliveryDetails = (deliveryDetails:any) => {
    dispatch({type:SAVE_DELIVERY_DETAILS, payload:deliveryDetails})
  }
 
  
  return (
    <OrderContext.Provider
      value={{
        cartItems: state.cartItems,
        deliveryDetails: state.deliveryDetails,
        addItemToCart,
        removeItemFromCart,
        saveDeliveryDetails
      } as any}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;