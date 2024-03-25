import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")
  }
  const handleLoclick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")
  }
  const handleClearclick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }
  const handleCopyclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="4"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearclick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyclick}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  )
}
