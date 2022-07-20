import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyAIcecream } from './../store/actionCreator';
export default function Icecream() {

    const icecream = useSelector((state) => state.icecream)
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(buyAIcecream());
    }

    return (
        <div>
            <p>Number of Icecreams {icecream.numberOfIcecream}</p>
            <button onClick={clickHandler}>Buy 1 icecream</button>

        </div>)
}




