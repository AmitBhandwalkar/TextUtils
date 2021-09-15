import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState('light');
  const swithMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showalert("dark mode is enable", "suscess")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("dark mode is disable", "suscess")
    }
  }

  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }



  return (
    <div>

     

        <Navbar title="TextUtils" mode={mode} swithMode={swithMode} />
        <Alert alert={alert} />
      
      
      
            <Textform mode={mode} showalert={showalert} />
     






    </div>
  );
}

export default App;
