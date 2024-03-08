import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class RandomAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {randomData: null};
  }

  ButtononClick = () => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        this.setState({ randomData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

render() {
  return (
      <div className='App'>
        <button className='button' onClick={this.ButtononClick}> Click here to Generate Random Data From Classs</button>
        {this.state.randomData ? (
          <div>
            <h2 style={{color: "red"}}>Random Data:</h2>
            <p>Name: {this.state.randomData.results[0].name.first} {this.state.randomData.results[0].name.last}</p>
            <p>Email: {this.state.randomData.results[0].email}</p>
            <p>Phone: {this.state.randomData.results[0].phone}</p>
        
            <p><img src={this.state.randomData.results[0].picture.large} alt=""/></p>

          </div>
        ) : (
          <p>No record found !!!</p>
        )}
      </div>
    );
  }
}

export default RandomAPI;