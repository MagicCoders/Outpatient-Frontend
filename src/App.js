import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Login from "./Login";

class App extends Component {
  render() {

      // 'let' keyword allows the declared variable to mutate/change.
      let testVariable = '"Quality Service Delivery"';
      return <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">Home Page</h1>
          </header>
          <p className="App-intro">

          </p>
          <p className="App-body">
          </p>
          <p>{testVariable}</p>
          <p className="App-footer">
              Copyright &copy; 2018 <br/> Egerton University Sanatorium
          </p>
      </div>;
  }
}

export default App;
