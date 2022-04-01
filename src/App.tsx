import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [people, setPeople] = useState([{
    name: 'Amanda Batula', 
    url: '', 
    age: 30, 
    note: 'Most annoying cast member'
  }, {
    name: 'Paige DeSorbo', 
    url: '', 
    age: 30, 
    note: 'Best dressed cast member'
  }])

  return (
    <div>
    <h1>People invited to our party</h1>
    </div>
  );
}

export default App;
