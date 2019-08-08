import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import icon from './logo_fcc.svg';

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
        <h1 className="title">Markdown Previewer</h1>
        <h3 className="subtitle">Try it! Enjoy it!</h3>
         <div className="container">
        <div className="input">
          <FormGroup className="input-form" controlId="formControlisTextarea">
            <div className="headers_styles">
              <img className="icon_fcc" src={icon} alt="icon_fcc" width="30" height="30" />
              <h2>
                Editor
              </h2>
            </div>
            
            <FormControl className="input-styles"  as="textarea"  placeholder="Enter Markdown" value={markdownText} onChange = {(e) => this.updatingText(e.target.value)} > </FormControl>
          </FormGroup>
        </div>

        <div className="output">
          <div className ="headers-output">
            <img className="icon_fcc_2" src={icon} alt="icon_fcc" width="30" height="30" />
            <h2 className="output-title">Preview</h2>
          </div>
          <div className="output-styles" dangerouslySetInnerHTML = {{ __html: marked(markdownText)}} >
          
          </div>
        </div>
      </div>
      </div>
      
     
    );
  }
}
 
export default App;