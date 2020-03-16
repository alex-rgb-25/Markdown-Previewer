import React from 'react';
import logo from './logo.svg';
import Previewer from './Previewer'
import MarkdownExample from './test';
import marked from 'marked';

class Editor extends React.Component {
    constructor(props){
        super(props);

        this.state={
            input:"# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n ### And here's some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks. \n ``` \n // this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' &amp;&amp; lastLine == '```') {\nreturn multiLineCode;\n }\n }\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n  - That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n![React Logo w/ Text](https://goo.gl/Umyytc)",
        }
    }


    changeHandler = (event) =>{
        this.setState({
            input:event.target.value
        })
    }
    
  render(){
    return (<div>
        <br></br>

        <h2 style={{textAlign:'right'}}>freecodecamp - Markdown previewer</h2>
        <br></br>
       <div style={styles3}>
        <div style={styles2}>Editor</div>
        <textarea id="editor" onChange={this.changeHandler} 
    style= {styles}> 
   {this.state.input}
    </textarea>
    </div>
    <br></br>
    <Previewer text={this.state.input}/>
</div>)
  }
}

const styles={
    minHeight:'200px',
    maxWidth:'700px',
    width:'100%',
    display:'block',
    margin: '0 auto',
    backgroundColor:'#f1f1b0',
    border:'2px solid black',
    padding:'10px',

}
const styles2={
    maxWidth:'700px',
    width:'100%',
    display:'block',
    margin: '0 auto',
    backgroundColor:'#df8543',
    border:'2px solid black',
    paddingLeft:'25px',
    
}
const styles3={
    width:'70%',
    display:'block',
    margin: '0 auto',
    maxWidth:'700px',
    boxShadow: '21px -11px 8px -3px rgba(0,0,0,0.13)'
}


export default Editor;
