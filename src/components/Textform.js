//use rfc
import React, { useState } from 'react'

export default function Textform(props) {


   const [text, settext] = useState("")



   const handelOnClick = ()=>{
    let str = text.toUpperCase()
    settext(str)
    props.showalert('Upercase',"sucess")
   }
   const handelOnClick2 = ()=>{
       let str = text.toLowerCase()
       settext(str)
       props.showalert('Lowercase',"sucess")
   }

   const handelOnChange = (event)=>{
        settext(event.target.value)
       
   }

   const dark = {  
    color: "white",  
    backgroundColor: "black",    
  }; 
   
  const white = {
      color:"black",
      backgroundColor:"white"
  }

    return (
        <>
        <div className="container">
            <div className="mb-3 text-center">
            <label htmlFor="mybox" className="form-label"><h2>Enter Text To Analyis</h2></label>
                <textarea className="form-control" id="mybox" placeholder="Enter text here" rows="8" value={text} onChange={handelOnChange} 
                style={props.mode==='dark' ? dark: white}>
                </textarea>
            </div>
             <button type="button" className="btn btn-success mx-3" onClick={handelOnClick} >Convert TO UperCase</button>
             <button type="button" className="btn btn-success" onClick={handelOnClick2}>Convert To LoweCase</button>
        </div>
        <div className="container my-5">
            <h2>Your text summary </h2>
            <p> <b> {text.length} </b> characters AND <b>{text.split(" ").length} </b> words </p>
            <p>{0.008 *text.split(" ").length} Minutes to read</p>
        </div>
      </>
    )
}
