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
        <header className="App-header">
        <div class="row">
          <div class="col-md-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control" 
              placeholder={"Ajouter un  Candidat"} value={val}
              onChange={handleChange}/>
              <div class="input-group-append">
                <button type="button" class="btn btn-primary" onClick={handleAdd}>
                  Ajouter
                </button>
              </div>
              
            </div>  
          </div>
          <div class="col-md-12">
            <button type="button" class="btn btn-success">
              Démarrer le vote
            </button>
          </div>
          <div class="col-md-12">
            <hr/>
            </div>
            <div class="col-md-12 text-secondary">
              <Jumbotron>
                <ul>{list && list.map((listItem, i) => <li key={i}>{listItem}</li>)}</ul>
              </Jumbotron>
            </div>
          </div>
        </header>
        <main className="App-main">
            
        </main>
      </div>
    );
  }
  
export default App;