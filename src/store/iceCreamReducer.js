
import {BUY_A_ICECREAM} from './actions'

const initialState = {
    numberOfIcecream:100
}

 const iceCreamReducer = (state = initialState,action)=>{

    switch(action.type){
        case BUY_A_ICECREAM: {
             return{
                 ...state,
                 numberOfIcecream:state.numberOfIcecream -1
             }
        }
      
        default: return state

    }
}


export default iceCreamReducer;