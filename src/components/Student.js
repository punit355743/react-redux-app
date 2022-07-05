import React,{useState} from 'react';

export default function Student({ id, name, age, address }){
  return(<div>
     <span>id:{id}</span><span>Name:{name}</span><span>Age:{age}</span>
  </div>)
}




