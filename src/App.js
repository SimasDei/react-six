import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
