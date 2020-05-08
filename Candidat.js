import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";

function Candidat(nom) {
  this.nom = nom;
  }

  import React, {useState} from 'react';

function InputForm(){
    const [value, setValue] = useState('');

    const handleChange = (event) => setValue(event.target.value);
    const handleSubmit = (event) => {
        Candidat(value);
        alert('Un candidat a été ajouter à la course aux votes: ' + value);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default InputForm;