import React from "react";
import "./app.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <div className='HeaderStuff'>
        <h1>When should I clock out </h1>
        <h2>Input: Hours worked and Clock in time. </h2>
      </div>
      <Form />
    </div>
  );
}

export default App;
