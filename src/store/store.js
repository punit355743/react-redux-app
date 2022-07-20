import { createStore,combineReducers } from 'redux';
import pizzaReducer from './pizzaReducer';
import iceCreamReducer from './iceCreamReducer';


const rootReducer = combineReducers({
    pizza:pizzaReducer,
    icecream:iceCreamReducer
})



const store = createStore(rootReducer);

export default store;





