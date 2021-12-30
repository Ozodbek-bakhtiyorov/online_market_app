import {createContext, useContext, useReducer, useState} from "react";
import {reducer} from "../reducers/AppReducer";
export const Cart = createContext();
const initialState = {
    goods:[],
    orders:[],
    loading:true,
    isOpenCard:false
}
const Context = ({children})=>{
    const [value, dispatch] = useReducer(reducer,initialState);
    value.toggleModal = (e)=>{
        dispatch({type:'TOGGLE_MODAL',payload:e})
    }
    value.addToCart = (item)=>{
        dispatch({type:'ADD_TO_CART',payload:item})
    }
    value.incr = (id)=>{
        dispatch({type:'INCR', payload:id})
    }
    value.decr = (id)=>{
        dispatch({type:'DECR', payload:id})
    }
    value.del = (id)=>{
        dispatch({type:'DEL', payload:id})
    }
    return(
        <Cart.Provider value={{value}}>
            {children}
        </Cart.Provider>
    )
}
export const  AppState = ()=>{
    return useContext(Cart);
}
export default Context;