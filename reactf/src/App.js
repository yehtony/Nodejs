import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      {Fetchtest()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// React Fetch json data from express server
function Fetchtest(){
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:3001/json")
      let data = await res.json()
      console.log(data)
    }
    fetchData()
  }, []);
}

export default App;
