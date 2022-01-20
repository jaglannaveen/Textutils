import React, {useState} from "react";
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase", "success");
    }
    const handleLoClick=()=>{
       // console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to LowerCase", "success");
    }
    const handleClearClick=()=>{
       // console.log("Uppercase was clicked" + text);
        let newText= '';
        setText(newText)
        props.showAlert("Text is cleared", "success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        props.showAlert("All extra spaces is removed ", "success");

    }
    const handleCopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied", "success");
    }
    const handleExtraSpaces =() =>
    {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here');

  return (
      <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Exta Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 *   text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox to preview it here"}</p>
    </div>
    </>
  );
}
