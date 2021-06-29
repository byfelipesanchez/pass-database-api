import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'
// Access-Control-Allow-Origin: http://127.0.0.1:5000/product/1
// https://official-joke-api.appspot.com/random_joke
//https://www.youtube.com/watch?v=rpg1jOvGCtQ&list=TLPQMjkwNjIwMjHEAwLpFdeKig&index=5

function App() {

  const fetchData = () => {
    axios.get('http://127.0.0.1:5000/product').then(
      (response) => {
      console.log(response);
    });
  };


  return ( 
  
  <div>Hello World</div>,

  <button onClick={fetchData} >Test</button>
  
  );
}

export default App;
