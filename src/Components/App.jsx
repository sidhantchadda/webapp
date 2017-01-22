import React, { Component } from 'react';
import '../Css/App.css';
import Github from './Github.jsx'
import Header from './Header.jsx'

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
