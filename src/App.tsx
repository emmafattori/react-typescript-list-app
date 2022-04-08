import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string, 
    age: number, 
    url: string, 
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Amanda Batula", 
      age: 30, 
      url: 'https://media.glamour.com/photos/609d1e5937c4f7f56609ba17/master/pass/lede_social%20(31).jpg', 
      note: "Allergic to Kyle having a good time."
    }
  ])


  return (
    <div>
    <h1>People invited to our party</h1>
    <List people={people}/>
    <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
