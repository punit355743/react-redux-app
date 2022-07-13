import { createStore} from 'redux';
import pizzaReducer from './pizzaReducer'
// import { useDispatch } from 'react-redux'


// const dispatch = useDispatch()

// const initialState = {
//     numberOfPizza:10
// }

// const initialStateChocklate = {
//     choklate:100
// }


// const pizzaReducer = (state = initialState,action)=>{
//     switch(action.type){
     
//         case BUY_A_PIZZA {
//              return{
//                  ...state,state.numberOfPizza -1
//              }
//         }

//     }

// }

// const chocolotaeReducer = (state = initialStateChocklate,action)=>{
//     switch(action.type){
     
//         case BUY_A_chocklate {
//              return{
//                  ...state,state.numberOfPizza -1
//              }
//         }

//     }

// }





// const BUY_A_PIZZA = "buy_a_pizza";

// function buyAPizza(){
//     return{
//         type:BUY_A_PIZZA
//     }
// }

// dispatch(buyAPizza())


// const rootReducer = combineReducers({
//     pizza:pizzaReducer,
//     choklate:chocolotaeReducer
// })


const store = createStore(pizzaReducer);

export default store;





