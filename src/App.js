import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
