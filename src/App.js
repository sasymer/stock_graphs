import React from 'react';
import logo from './logo.svg';
import stock from './resources/stock.jpg';
import logosa from './resources/logosa.png';

import './App.css';

import HomePage from './pages/HomePage.js';
import Colors from './pages/Colors.js';


function App() {
  return (
    
    <div className="App" style={{background: "#000000"}}> 
      
      <header className="App-header">
        <img src={logosa} className="Logo-sa" alt="logosa" width="180" height="100"/>
        <p>
          Website prototype!
        </p>
        
        <img src={stock} className="Stock-pic" alt="stock" width="500" height="400"/>

        <div>
          <button>
            <p> 
              Press to play!
            </p>
          </button>
        </div>

      </header>
    </div>

  );
}

export default App;
