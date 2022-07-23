import React, { useState } from 'react';
import {connect } from 'react-redux';
import {buyAPizza,buy100Pizza} from './../store/actionCreator';
function Pizza({pizza,buyPizza,buy100Pizza}) {
   
    const clickHandler = ()=>{
        buyPizza();
    }
    const clickHandlerPizza = ()=>{
        buy100Pizza();
    }


    return (<div>
        <p>Number of pizza {pizza.numberOfPizza}</p>
        <button onClick={clickHandler}>Buy 1 pizza</button>
        <button onClick={clickHandlerPizza}>Buy 100 pizza</button>
    </div>)
}


const mapStateToProps = (state) => {
    return { pizza: state.pizza }
};

const mapDispatchToProps = (dispatch) => {
    return {
       buyPizza:() => dispatch(buyAPizza()),
       buy100Pizza:() => dispatch(buyAPizza()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pizza)




