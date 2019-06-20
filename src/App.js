import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

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
          <FormGroup controlId="formControlisTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl as="textarea" placeholder="Enter Markdown" value={markdownText} onChange = {(e) => this.updatingText(e.target.value)} > </FormControl>
          </FormGroup>
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