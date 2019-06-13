import React from "react";
import "./app.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App gradient">
      <div className='HeaderStuff'>
        <h1>When should I clock out?</h1>
        <h2>Input: The hours worked and The time you clocked in.</h2>
      </div>
      <Form />
    </div>
  );
}

export default App;
