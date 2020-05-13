import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
//Ceci est notre version finale

function Candidat(props) {
  
  const handleChange = e => {
    props.setVal(e.target.value);
  };

  const handleAdd = () => {
    props.setList([
      ...props.list, //liste de candidats
      [ //tablea double entrée qui renseigne candidat et vote (0 par défaut))
        props.val,
        0 //Vote 0 par défaut
      ]
    ]);
    props.setVal("");
  };

  const handleNotreComponent = () => {
    //Permet de changer le component pour vote en passant la varaible témoin
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
          <ul>
              {props.list && props.list.map((listItem, i) => <li key={i}>
                  {listItem[0]}
              </li>)}
            </ul>
          </Jumbotron>
        </div>
      </div>
  );
}

function Vote(props) {

  console.log(props.list);
  const handleVote = e => {
    console.log(e.target.id);
    for(var i = 0; i < props.list.length; i++){
      var element = props.list[i];
      var nomCandidat = element[0];
      //Ça veut dire que le bouton voter cliqué est pour ce candidat
      if(nomCandidat === e.target.id){
        var vote = element[1];
        vote += 1;
        props.list[i][1] = vote;  //mettre à jour le vote
        break;
      }
    }
    //console.log(props.list);
  };  

  const handleNotreComponent = () => {
    //Algorithme du gagnant
    var listeCandidats = props.list.slice(0); //Prendre une copie de l'autre sans garder la référence
    listeCandidats.sort((a,b) => a[1] - b[1]);  //Ordre croissant
    listeCandidats.reverse()  //Ordre décroissant
    console.log(listeCandidats);
    //Mettre à jour le gagnant
    var nomGagnant = listeCandidats[0][0];
    props.setGagant(nomGagnant);
    //Permet de changer le component pour gagant en passant la varaible témoin
    props.notreComponent("gagnant");
  };

  return (
    <div className="row">     
      <div className="col-md-12">
        <button type="button" className="btn btn-danger" onClick={handleNotreComponent}>
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
                    {listItem[0]}
                  </div>
                  <div className="col-md-3">
                    <button type="button" className="btn btn-primary" 
                      id={listItem[0]}
                      onClick={handleVote}>
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
  //console.log(props.list);

  return (
    <div className="row">     
      <div className="col-md-12 text-secondary">
        <Jumbotron>
          <h4>=== GAGNANT ===</h4>
          {props.varGagnant}
        </Jumbotron>
      </div>
      <div className="col-md-12 text-secondary">
        <Jumbotron>
            <ul>
              {props.list && props.list.map((listItem, i) => <li key={i}>
                <div className="row">
                  <div className="col-md-9">
                    {listItem[0]}
                  </div>
                  <div className="col-md-3">
                  {listItem[1]}
                  </div>
                </div>
              </li>)}
            </ul>
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
    const [varGagnant, setGagant] = useState("");
  
    return (
      <div className="App">
        <header className="App-header">
          {
            varComponent === "candidat"
            ? <Candidat list={listCandidat} val={val} setList={setListCandidat} 
                        setVal={setVal} notreComponent={notreComponent}/>
            : 
            (varComponent === "vote"
            ? <Vote list={listCandidat} notreComponent={notreComponent} 
              setGagant={setGagant} />
            : <Gagnant list={listCandidat} notreComponent={notreComponent} 
                varGagnant={varGagnant} />
            )            
          }
        </header>
        <main className="App-main">
            
        </main>
      </div>
    );
  }
  
export default App;