import React from 'react';
import Parent from './Component/Class/Parent'
import BootstrapComp from './Component/Class/BootstrapComp';
import {BrowserRouter, Route, Switc} from 'react-router-dom'
import NavbarComp from './Component/Functional/NavbarComp';
import HomePage from './Component/Functional/HomePage';
import About from './Component/Functional/AboutComp';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Functional/Home';
//import Dashboard from './Component/Class/Dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

//sebelumnya di div ada dashboard dan home
export default App;
