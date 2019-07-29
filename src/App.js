import React, { Component } from 'react';
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
        <div className="input">
          <FormGroup controlId="formControlisTextarea">
            <h2>Markdown input</h2>
            <FormControl as="textarea" rows="25" cols="38" placeholder="Enter Markdown" value={markdownText} onChange = {(e) => this.updatingText(e.target.value)} > </FormControl>
          </FormGroup>
        </div>

        <div className="output">
          <h2>Markdown Output</h2>
          <div className="output-styles" rows="25" cols="38" dangerouslySetInnerHTML = {{ __html: marked(markdownText)}} >
              
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;