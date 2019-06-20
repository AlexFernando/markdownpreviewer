import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const marked = require('marked');

class App extends Component {
  state = {
    markdownText : ""
  }

  updatingText = function(markdownText) {
    this.setState({
      markdownText
    })
  }

  render() {
    
    let {markdownText} = this.state;
    
    return (
      <div className="container">
        <div>
          <h1>Markdown Input</h1>
          <form>
            <textarea name="textarea" rows="10" cols="50" placeholder="Write something here" value= {markdownText} onChange = {(e) => this.updatingText(e.target.value)} ></textarea>
          </form>
        </div>

        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{ __html: marked(markdownText)}} >

          </div>
        </div>
      </div>
    );
  }
}
 
export default App;