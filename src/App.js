import './App.css';
import React, { useEffect, useState } from 'react';

function App() {    
  const [data, setData] = useState(null);  
  const [gameText, setGameText] = useState('');

  useEffect(() => {
    fetch('/game-data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error to loading JSON:', error));
  }, []);

  if (!data) {
    return <div>Loading Data...</div>;
  }

  const handleSearch = (event) => {   
    setGameText(event.target.value);
  };

  const filteredGames = data.filter((game)=>{      
    return game.title.toLowerCase().includes(gameText.toLowerCase())
  })

  const gamesToDisplay = gameText ? filteredGames : data;

  return (
    <div className="App centerElement">
      <input type='text' placeholder='Type kind of game' value={gameText} onChange={handleSearch}></input>
      <h1>Game List:</h1>
      <ul>
        {gamesToDisplay.map((item) => (
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
