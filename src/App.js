import React from 'react';
import './App.css';
import Classwork2 from "./Componentss/classwork2";
const App = ({name})=>{
return (
  <div>
  <h1>Hello world!</h1>
  <p>Your name {name}</p>
  <Classwork2 date={ new Date() }/>
  </div>
);
}
export default App;