import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
 
function App() {
 

    const [value, setValue] = useState('');

    const handleChange = (event) => setValue(event.target.value);
    const handleSubmit = (event) => {
    

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
}export default App;