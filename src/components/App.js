import React, {useState} from 'react';
import '../styles/App.css';

const App = () => {
//code here 

const [color, setColor] = useState("redColor");

const HandleStyle = () => {
  if(color === "redColor"){
    setColor("blueColor");
  }else{
    setColor("redColor");

  }

}

  return(
    <div id="main">
    <p className={color} >Newton School</p>
    <button id='button' onClick={HandleStyle} >Change Style</button>
  </div>
  )
}


export default App;
