import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("String has been cleared!", "success");
    }  
    const handleReverseClick = () => {
      let newText = text.split('').reverse().join('');
      setText(newText);
      props.showAlert("String has been reverse!", "success");
    }
    const handleCopy= () => {
     navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
    }
    const handleCapitalizeClick = () => {
      let newText = text.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
      setText(newText);
      props.showAlert("String has been capitalize!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove extra Spaces!", "success");
    }

    const [text, setText]= useState('');

    //text ="new text"; // Wrong way to change the text
    //setText("new text"); // correct way to change the text
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?`white`:`#111212`}}>
        <h1 className='mb-4'>{props.heading}</h1>
         <div className="my-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?`#111212`:`white`,color: props.mode==='dark'?`white`:`black`}}></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear text</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize Each Word</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
         <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?`white`:`#111212`}}>
      <h2>Your text Summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> { 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
