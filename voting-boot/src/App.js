import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
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
}
export default InputForm;