import React from "react";
import './App.css';
import {NavigationBar} from "./components/NavigationBar";


function App() {
  return (
    <div style={{width: "100%", height: 2000}}>
      <NavigationBar username={"ElijahAhmad__"} userSelected={true}/>
    </div>
  );
}

export default App;
