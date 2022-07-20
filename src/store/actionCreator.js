import {BUY_A_PIZZA,BUY_100_PIZZA, BUY_A_ICECREAM} from './actions';

//PIzza actions creator
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


//icecreams actions creator
export const buyAIcecream = ()=> {
    return {
        type:BUY_A_ICECREAM
    }
}


