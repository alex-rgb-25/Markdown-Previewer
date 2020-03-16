import React from 'react';
import logo from './logo.svg';
import Editor from './Editor';
import marked from 'marked';

class Previewer extends React.Component {
    constructor(props){
        super(props);
    }



    getMarkdownText() {
        var rawMarkup = marked(this.props.text, {sanitize: true});
        return { __html: rawMarkup };
      }

  render(){
    return (
        <div>
            <div style={styles3}>
            <div style={styles2}>Preview</div>
            <div id="preview" style={styles} dangerouslySetInnerHTML={this.getMarkdownText()}>
                </div>
            </div>
            <br></br>
    </div>)
  }
}



const styles = {
    
    whiteSpace: 'pre-wrap',
    display: 'block',
    padding:'10px',
    margin:'0 auto',
    backgroundColor:'#f1f1b0',
    minHeight:'200px',
    overflowWrap:'break-word',
    border:'2px solid black',
    borderRadius:'3px',
}

const styles2={
    display:'block',
    margin: '0 auto',
    backgroundColor:'#df8543',
    border:'2px solid black',
    borderRadius:'3px',
    paddingLeft:'25px'
}

const styles3={
    width:'80%',
    display:'block',
    margin: '0 auto',
    boxShadow: '21px -11px 8px -3px rgba(0,0,0,0.13)'
}










export default Previewer;
