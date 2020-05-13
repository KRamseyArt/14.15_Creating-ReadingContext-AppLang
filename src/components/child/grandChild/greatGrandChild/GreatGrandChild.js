import React, { Component } from 'react'
import languageSpecificCopy from './../../../../LanguageSpecificCopy';
import LanguageContext from './../../../../LanguageContext';

export class GreatGrandChild extends Component {
  static contextType = LanguageContext;

  render() {
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild