import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether Dark Mode Enabled or not
  const [modeText, setModeText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      setModeText('Light Mode');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enable","success");
      document.title = "Popeye | Dark Mode";
      // setInterval(()=>{
      //   document.title = "Popeye is sailor man";
      // },2000);
      // setInterval(()=>{
      //   document.title = "He likes spinch";
      // },1500);
     
    }else{
      setMode("light");
      setModeText('Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable","success");
      document.title = "Popeye | Light Mode"
    }
  }
  return (
    <> 
      {/* <BrowserRouter> */}
      <Navbar title="Popeye" about="About" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert= {alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>} />
          </Routes> */}
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
