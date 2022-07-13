import React,{useState} from 'react';
import Pizza from './component/Pizza';
import { Provider } from 'react-redux'
import store from './store/store';
export default function App(){
  return(
  <Provider store={store}>  
  <div>
    <h1>My Pizza Store</h1>
    <Pizza/>
  </div>
  </Provider>
  )
}




