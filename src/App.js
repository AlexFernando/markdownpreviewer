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
      <div className="main">
        <h1>Markdown Previewer</h1>
        <h3>Try it!   Enjoy it!</h3>
         <div className="container">
        <div className="input">
          <FormGroup className="input-form" controlId="formControlisTextarea">
            <h2>Editor</h2>
            <FormControl className="input-styles"  as="textarea"  placeholder="Enter Markdown" value={markdownText} onChange = {(e) => this.updatingText(e.target.value)} > </FormControl>
          </FormGroup>
        </div>

        <div className="output">
          <h2 className="output-title">Preview</h2>
          <div className="output-styles" dangerouslySetInnerHTML = {{ __html: marked(markdownText)}} >
          
          </div>
        </div>
      </div>
      </div>
      
     
    );
  }
}
 
export default App;