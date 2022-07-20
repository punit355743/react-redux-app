import React, { useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {buyAPizza,buy100Pizza} from './../store/actionCreator';
export default function Pizza() {
    const pizza = useSelector(state => state.pizza);
    console.log(pizza);
    const dispatch = useDispatch();
   
    const clickHandler = ()=>{
        dispatch(buyAPizza());
    }
    const clickHandlerPizza = ()=>{
        dispatch(buy100Pizza(50));
    }


    return (<div>
        <p>Number of pizza {pizza.numberOfPizza}</p>
        <button onClick={clickHandler}>Buy 1 pizza</button>
        <button onClick={clickHandlerPizza}>Buy 100 pizza</button>
    </div>)
}




