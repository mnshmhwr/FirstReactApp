import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');


  const convert = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to upper case","success");
  }
  const convertLow = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
  }
  const handleOnChange = (event)=>{
      setText(event.target.value)
  }
  const handleCopy = ()=>{
      let text = document.getElementById('myBox');
      text.select();
    //   text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
  }

  const clearText = ()=>{
      let newText = "";
      setText(newText);
  }
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#042743',color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="5" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode === 'light'?'#0D6EFD':'#042743'}} onClick={convert}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode === 'light'?'#0D6EFD':'#042743'}} onClick={convertLow}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode === 'light'?'#0D6EFD':'#042743'}} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode === 'light'?'#0D6EFD':'#042743'}} onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: props.mode === 'light'?'#0D6EFD':'#042743'}} onClick={clearText}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} charaters</p>
        <p>{0.0008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing to preview it here"}</p>
    </div>
    </>
  )
}
