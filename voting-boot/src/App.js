import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
    const [list, setList] = useState([]);
    const [val, setVal] = useState("");
  
    const handleChange = e => {
      setVal(e.target.value);
    };
  
    const handleAdd = () => {
      setList([...list, val]);
      setVal("");
    };
  
    return (
      <div className="App">
        <input
          type="text"
          placeholder={"Ajouter un  Candidat"}
          value={val}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Ajouter</button>
        <ul>{list && list.map((listItem, i) => <li key={i}>{listItem}</li>)}</ul>
      </div>
    );
  }
  
export default App;