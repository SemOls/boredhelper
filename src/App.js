import video from "./134.mp4";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';

function App() {
  const [advice, setAdvice]=useState("")

  useEffect ( ()=>{
    changeData()
  }, [])

 const changeData = async ()=>{
  const response = await fetch ("https://www.boredapi.com/api/activity/")
    const data= await response.json()
    setAdvice(data.activity)
    }
  return (
    <div className="app">

  <video autoPlay muted loop> 
  <source src={video} type="video/mp4"/>
  </video>

  <div className="container">
  <h1>Are You Bored?</h1>
  <h3>Let me give you advice on how to kill your boredom</h3>
    </div>

    <div className="box">
    <button className="btn" onClick={changeData}> push here 🙏</button>
    <h2> {advice}</h2>
    </div>

    </div>
  );
}

export default App; 
