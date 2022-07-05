import React,{useState} from 'react';
import StudentList from './components/StudentsList'
import './App.css';

export default function App(){

  const studentData = [{
    id:101,
    name:"vicky",
    age:28,
    address:"pune"

  },{
    id:102,
    name:"punit",
    age:38,
    address:"nagpur"

  },{
    id:103,
    name:"raja",
    age:18,
    address:"delhi"

  }]

  return(<div>
    <h1>my school</h1>
    <StudentList studentData= {studentData}/>
  </div>)
}




