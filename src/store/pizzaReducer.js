import {BUY_A_PIZZA,BUY_100_PIZZA} from './actions'

const initialState = {
    numberOfPizza:500
}

 const pizzaReducer = (state = initialState,action)=>{

    console.log(action)
    switch(action.type){
        case BUY_A_PIZZA: {
             return{
                 ...state,numberOfPizza:state.numberOfPizza -1
             }
        }
        case BUY_100_PIZZA: {
            return{
                ...state,numberOfPizza:state.numberOfPizza -action.payload
            }
       }
        default: return state

    }
}


export default pizzaReducer;