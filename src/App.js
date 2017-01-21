import React, { Component } from 'react';
import './App.css';
import Github from './Github.js'
import Header from './Header.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        
        <div className="App-header">
          <Github />
          <h2>Sidhant Chadda</h2>
        </div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
