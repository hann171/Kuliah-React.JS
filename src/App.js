import React from 'react';
import Parent from './Component/Class/Parent'
import BootstrapComp from './Component/Class/BootstrapComp';
import {BrowserRouter, Route, Switc} from 'react-router-dom'
import NavbarComp from './Component/Functional/NavbarComp';
import HomePage from './Component/Functional/HomePage';
import About from './Component/Functional/AboutComp';
import Detail from './Component/Functional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Functional/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffect from './Component/Hooks/Functional/HooksUseEffect';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Functional/Home';
//import Dashboard from './Component/Class/Dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/mahasiswa" component={ListComp}/>
        <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
        <Route exact path="/mahasiswa/edit" component={EditComp}/>
        <Route exact path="/kelas" component={KelasComp}/>
        <Route exact path="/hooks" component={HooksComp}/>
        <Route exact path="/useeffects" component={HooksUseEffect}/>
      </switch>
    </BrowserRouter>
  );
}

//sebelumnya di div ada dashboard dan home
export default App;
