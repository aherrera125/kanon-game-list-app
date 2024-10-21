import React from 'react';
import data from '../src/game-data.json';

function App() {  

  return (
    <div className="App">
      <h1>Game List:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Title: <b>{item.title}</b></p>
            <p>Provider Name: <b>{item.providerName}</b></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
