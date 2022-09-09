
import React,{useState} from 'react'


export default function TForm(props) {
   
    const handleLoClick=()=>
    {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase text","success");
    }
    const handleUpClick=()=>
    {

            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("converted to Uppercase","success");

    }
    const handleCopy=()=>{

      var text = document.getElementById('mybox');
      text.select();

    }
    const handleExtraSpaces= ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      //props.showAlert("Removed extra spaces","success");
 
    }
    const handleOnChange = (event)=>
    {
            setText(event.target.value);

    }
    const emptyText = ()=>
    {

        setText("");
        props.showAlert("empty text","success");

    }
    const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className='container'>
    <form>
    <div  className="form-group">
        <h2>dfdf</h2>
      <textarea  className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'red':'red'}} onClick={emptyText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type='button' className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button type='button' className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button type='button' className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
  </form>
  </div>
  <div className="container my-3">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>

  </div>
    </>
    
  )
}
