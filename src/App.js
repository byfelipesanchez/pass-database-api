import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios'

// https://official-joke-api.appspot.com/random_joke -> test api
//https://www.youtube.com/watch?v=rpg1jOvGCtQ&list=TLPQMjkwNjIwMjHEAwLpFdeKig&index=5

function App() {

  const [data, setData] = useState([])
  const [q, setQ] = useState("")

  const fetchData = () => {
    axios.get('http://127.0.0.1:5000/product/1 ').then(
      (response) => {
      console.log(response);
      setData(response.data.name + response.data.description + response.data.qty);
    });
    
  };




  // const axios = require('axios')

  // const edtiSQL = () => {
  //   axios.post('http://127.0.0.1:5000/product/1', {
  //   description: 'testign axios post',
  //   name: 'test',
  //   qty: 20,
  //   price: 20.21
  // });
  // };

  const style = {
    color: "black",
    backgrounsdColor: "DodgerBlue",
    fontFamily: "Lobster",
    fontSize:"40px",
    padding: "30px",
    fontWeight: "Bold"
  }

//search bar, when searched, go to item route 

  return ( 
  
  <div class='body'>
  <button style={style} onClick={axios} >Test</button>
  <a href={'http://127.0.0.1:5000/product/1' }>click</a>
  <button style={style} onClick={fetchData}>log</button>
  <input type='text' placeholder='search'></input>
  {data}
  
  </div>

  );
}

export default App;
