import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Functional/Home';
import Dashboard from './Component/Class/Dashboard';


function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Home/>
    </div>
  );
}

export default App;
