import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const RandomAPIS = () => {
  const [randomData, setRandomData] = useState(null);  

  const ButtononClick = () => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setRandomData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

return (
  <div className='App'>
    <button className='button' onClick={ButtononClick}>Click here to Generate Random Data from Function </button>
    {randomData ? (
      <div>
       <h2 style={{color: "red"}}>Random Data:</h2>
        <p>Name: {randomData.results[0].name.first} {randomData.results[0].title}</p>
        <p>Email: {randomData.results[0].email}</p>
        <p>Phone: {randomData.results[0].phone}</p>
        <p><img src={randomData.results[0].picture.large} alt=""/></p>
        </div>
      ) : (
        <p>No record found !!!!</p>
      )}
    </div>
  );
};

export default RandomAPIS;