import { createContext, useReducer, useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { reducer } from '../Component/Reducer'
import {handleDeleteById,handleAddById} from './Reducer'
export const Context=createContext()

const ContextProvider = ({children}) => {
const [data,setData]=useState([])
  const initState={
    item:data
  }
  const [state,dispatch]=useReducer(reducer,initState)
  function getUsers()
  {
    return fetch("https://warm-sea-77698.herokuapp.com/mobile").then((res)=>res.json())
  } 
   useEffect(()=>{
    getUsers().then((res)=>{ setData(res);
      console.log(data)})
    })
  const handleAdd=(id,no,quantity,price,total_price)=>{
    handleAddById(id,no,quantity,price,total_price).then((res) => {
    getUsers()
  });
  }  

  function handleRemove(id) {
    handleDeleteById(id).then((res) => {
      getUsers()
    });
  }
  function clearCart(){
    return dispatch({ type:"CLEAR_CART"})
  }
  return (
    <div>
        <Context.Provider value={{data ,handleAdd,handleRemove,clearCart}}>{children}</Context.Provider>

    </div>
  )
}

export default ContextProvider
