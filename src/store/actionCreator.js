import {BUY_A_PIZZA,BUY_100_PIZZA} from './actions';


export const buyAPizza = ()=> {
    return {
        type:BUY_A_PIZZA
    }
}


export const buy100Pizza = (pizza)=> {
    return {
        type:BUY_100_PIZZA,
        payload:pizza
    }
}