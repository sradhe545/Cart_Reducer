import React from 'react'
import {  createContext} from 'react';
import {products} from "./Product"
import { reducer } from './Reducer';
import ContextCart from './ContextCart';
import { useReducer } from 'react';
import { useEffect } from 'react';

export const  CartContext= createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
  };
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const removeItem = (id) => {
        return dispatch({
          type: "REMOVE_ITEM",
          payload: id,
        });
      };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

   // increment the item
   const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };



  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);
  return (
    <>
    <CartContext.Provider value={{...state, removeItem,clearCart,increment,decrement}}>
       <ContextCart/>
    </CartContext.Provider>
    </>
  )
}

export default Cart