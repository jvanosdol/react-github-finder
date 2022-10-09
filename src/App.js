import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import UserItem from './components/Users/UserItem';
import './App.css';


class App extends Component {

  render() {
    const name = 'John Doe'
    //const numbers = [1, 2, 3, 4]

    return (
      <div className='App'>
        <Navbar />
        <UserItem />    
      </div>
    );
  }
}

export default App;