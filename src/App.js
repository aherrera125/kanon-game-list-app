import './App.css';
import React, { useEffect, useState } from 'react';

function App() {    
  const [data, setData] = useState(null);  
  useEffect(() => {
    fetch('/game-data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error to loading JSON:', error));
  }, []);

  if (!data) {
    return <div>Loading Data...</div>;
  }

  return (
    <div className="App centerElement">
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
