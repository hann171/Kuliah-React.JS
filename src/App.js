import React, { useState, createContext, useReducer } from 'react';
import Parent from './Component/Class/Parent'
import BootstrapComp from './Component/Class/BootstrapComp';
import { BrowserRouter, Route, Switc } from 'react-router-dom'
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
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HookReducer from './Component/Hooks/Functional/HookReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Functional/Home';
//import Dashboard from './Component/Class/Dashboard';

export const keranjangContext = createContext()

const initialState = {
  jumlah: 0,
  hargaSatuan: 100000,
  hargaTotal: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'tambah': return {
      ...state,
      jumlah: state.jumlah + 1,
      hargaTotal: state.hargaSatuan + (state.hargaSatuan * state.jumlah)
    }
    case 'kurang': return {
      ...state,
      jumlah: state.jumlah - 1,
      hargaTotal: (state.hargaSatuan * state.jumlah) - state.hargaSatuan
    }
    default:
      return state
  }
}

const App = () => {

  const [value, setValue] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
          <switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/mahasiswa" component={ListComp} />
            <Route exact path="/mahasiswa/tambah" component={TambahComp} />
            <Route exact path="/mahasiswa/edit" component={EditComp} />
            <Route exact path="/kelas" component={KelasComp} />
            <Route exact path="/hooks" component={HooksComp} />
            <Route exact path="/useeffects" component={HooksUseEffect} />
            <Route exact path="/product" component={ProductComp} />
            <Route exact path="/reducer" component={HookReducer} />
            <Route exact path="/tagihan" component={Tagihan} />
          </switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}


//sebelumnya di div ada dashboard dan home
export default App;
