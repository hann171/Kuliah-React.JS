import React from 'react';
import Parent from './Component/Class/Parent'
import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Functional/NavbarComp';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Functional/Home';
//import Dashboard from './Component/Class/Dashboard';


function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}

//sebelumnya di div ada dashboard dan home
export default App;
