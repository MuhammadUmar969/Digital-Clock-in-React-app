import React from "react";
import { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
 
  // ctime is state object
  //setCtime is a updated object

  const [ctime,setCtime] = useState(newTime);
  const UpdateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  setInterval(UpdateTime,1000);
  return(
   <>
    <div className="container">
    <h1 className="heading">{ctime}</h1>
    </div>
   </>
  );
};




export default App;