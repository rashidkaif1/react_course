
// import Header from './components/Header';
// import Leftbar from './components/Leftbar';
// import Main from './components/Main';

import TForm from './components/TForm';
//import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
function App() {
  const [mode,setMode]=useState('light');
  const [modeName,setModeName]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }
  const toggleMode = ()=>{

    if(mode==='dark')
    {
        setMode('light');
        setModeName('dark');
        showAlert("Light mode is enabled","success");

    }else{

      setMode('dark');
      setModeName('light');
      showAlert("dark mode is enabled","warning");
    }
    //alert('ddd' + mode);
  }
  return (
    <>
    
    <div id="wrapper">

          {/* <Header title="My first React" />
          <Leftbar />
          <Main /> 
          */}
          {/* 
          <About /> */}
          
          <Navbar mode={mode} modeName={modeName} toggleMode={toggleMode}></Navbar>
          <Alert alert={alert}/>
          <TForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />
        
            </div>
    </>
  );
}

export default App;
