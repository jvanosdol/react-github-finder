import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false })
    console.log(res.data)
  }

  render() {
    const name = 'John Doe'
    //const numbers = [1, 2, 3, 4]

    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} /> 
        </div>
           
      </div>
    );
  }
}

export default App;