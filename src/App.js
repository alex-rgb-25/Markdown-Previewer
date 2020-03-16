import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer'

class App extends React.Component {

  render(){
    return (
    <div style={{backgroundColor:'#7fa998'}}>
      <Editor />
      
      </div>
    )
  }
}

export default App;
