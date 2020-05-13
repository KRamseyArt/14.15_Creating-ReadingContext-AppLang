import React, { Component } from 'react';
import Child from './components/child/Child';
import LangControls from './components/langControls/LangControls';
import LanguageContext from './LanguageContext';

export class App extends Component {
  state = {
    lang: window.navigator.language
  }

  handleSetLang = (lang) => {
    this.setState({lang})
  }
  
  render(){
    const contextValue = {
      lang: this.state.lang
    }
    return (
      <LanguageContext.Provider
        value={contextValue}
      >
        <div className="App">
          <LangControls
            onSetLang={this.handleSetLang}
          />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
