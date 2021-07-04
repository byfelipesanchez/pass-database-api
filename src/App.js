import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import FetchingAPI from './Components/FetchingAPI'

// https://official-joke-api.appspot.com/random_joke -> test api
//https://www.youtube.com/watch?v=rpg1jOvGCtQ&list=TLPQMjkwNjIwMjHEAwLpFdeKig&index=5

function App() {

  const [data, setData] = useState([])
  const [q, setQ] = useState("")

  // const fetchData = () => {
  //   axios.get('http://127.0.0.1:5000/product/1 ').then(
  //     (response) => {
  //     console.log(response);
  //     setData(response.data.name + response.data.description + response.data.qty);
  //   });
    
  // };


/*  const fetchingData = () => {
    fetch('http://127.0.0.1:5000/product/1 ').then(
      response => response.json()).then(
      data => console.log(data));
  };*/

  //axis post method

//axios post function 



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

// search bar, when searched, go to item route 

  return ( 
  
  <div class='body'>
  <button style={style} onClick={axios} >Test</button>
  <FetchingAPI/>
  <input type='text' placeholder='search'></input>
  {data}
  
  </div>

  );
}

export default App;
