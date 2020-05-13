import React, { Component } from 'react';
import Child from './components/child/Child';
import LangControls from './components/langControls/LangControls';

export class App extends Component {
  render(){
    return (
      <div className="App">
        <LangControls />
        <Child />
      </div>
    );
  }
}

export default App;
