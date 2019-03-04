import React, { Component } from 'react';
import './App.css';
import TipCalculator from './components/tipcalculator';

class App extends Component {
  render() {
    return (
      <div className="App">        
          <TipCalculator/>
      </div>
    );
  }
}

export default App;
