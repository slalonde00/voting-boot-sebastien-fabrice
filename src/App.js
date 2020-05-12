import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";

function Candidat(props) {
  
  const handleChange = e => {
    props.setVal(e.target.value);
  };

  const handleAdd = () => {
    props.setList([...props.list, props.val]);
    props.setVal("");
  };

  const handleNotreComponent = () => {
    props.notreComponent("vote");
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="input-group mb-3">
          <input type="text" className="form-control" 
          placeholder={"Ajouter un  Candidat"} value={props.val}
          onChange={handleChange}/>
          <div className="input-group-append">
            <button type="button" className="btn btn-primary" onClick={handleAdd}>
              Ajouter
            </button>
          </div>
          
        </div>  
      </div>
      <div className="col-md-12">
        <button type="button" className="btn btn-success" onClick={handleNotreComponent}>
          Démarrer le vote
        </button>
      </div>
      <div className="col-md-12">
        <hr/>
        </div>
        <div className="col-md-12 text-secondary">
          <Jumbotron>
            <ul>{props.list && props.list.map((listItem, i) => <li key={i}>{listItem}</li>)}</ul>
          </Jumbotron>
        </div>
      </div>
  );
}

function Vote(props) {
  const handleVote = () => {
    props.vote("vote");
  };

  return (
    <div className="row">     
      <div className="col-md-12">
        <button type="button" class="btn btn-danger">
          Arrêter le vote
        </button>
      </div>
      <div className="col-md-12">
        <hr/>
        </div>
        <div className="col-md-12 text-secondary">
          <Jumbotron>
            <ul>
              {props.list && props.list.map((listItem, i) => <li key={i}>
                <div className="row">
                  <div className="col-md-9">
                    {listItem}
                  </div>
                  <div className="col-md-3">
                    <button type="button" className="btn btn-primary" onClick={handleVote}>
                      Voter
                    </button>
                  </div>
                </div>
              </li>)}
            </ul>
          </Jumbotron>
        </div>
      </div>
  );
}

function Gagnant(props) {

  return (
    <div class="row">     
      <div class="col-md-12">
        <hr/>
        </div>
        <div class="col-md-12 text-secondary">
          <Jumbotron>
          </Jumbotron>
        </div>
      </div>
  );
}

function App() {
    const [listCandidat, setListCandidat] = useState([]);
    const [val, setVal] = useState("");
    //La variable temoin peut prendre les valeurs possibles suivantes :
    //candidat | vote | gagnant
    //Chacune de ces valeurs permet de rendre un component
    const [varComponent, notreComponent] = useState("candidat");
  
    return (
      <div className="App">
        <header className="App-header">
          
          {
            varComponent == "candidat"
            ? <Candidat list={listCandidat} val={val} setList={setListCandidat} 
                        setVal={setVal} notreComponent={notreComponent}/>
            : 
            (varComponent == "vote"
            ? <Vote list={listCandidat} notreComponent={notreComponent} />
            : <Gagnant />
            )            
          }
        </header>
        <main className="App-main">
            
        </main>
      </div>
    );
  }
  
export default App;