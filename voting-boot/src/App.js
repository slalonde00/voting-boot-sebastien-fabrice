import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import  './Candidat.js';

 function   App() {

    

    const [value, setValue] = useState();

    
    const [Candidat, setCandidat] = useState();


    const [Candidat1, setCandidat1] = useState();
    
    const [Candidat2, setCandidat2] = useState();

    const [Candidat3, setCandidat3] = useState();

        const list = [Candidat];
 
    const SimpleList = () => (
        <ul>
          {list.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      );

    const handleChange = (event) => setValue(event.target.value);
    
    const handleClick = (event) =>{
        
        setCandidat(value);
        Candidat = new Candidat(value);
        list.unshift(Candidat);

        
        
    
    }

    const handleSubmit = (event) => {
        alert('Un candidat a été ajouter à la course aux votes: ' + value);
        alert('La  Liste de Candidat contient : ' + list.toString); //Méthode toString à redéfinir pour afficher la liste des Candidats
        
        event.preventDefault();
    }
  

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <br></br>
            <input onClick={handleClick} type="submit" value="Submit" />
            
            <Jumbotron>
            {SimpleList()}
            </Jumbotron>

                    </form>
            
    );


    }
export default App;