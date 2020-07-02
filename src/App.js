import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuSuperior from "./Compartida/MenuSuperior";
import Encabezado from "./Inicio/Encabezado";
import LoQueHacemos from "./Inicio/LoQueHacemos";
import Contactanos from "./Inicio/Contactanos";
import Producto from "./Inicio/Producto";
import Pie from "./Compartida/Pie";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Detalle from './Productos/Detalle';
import Contacto from './Contacto/Contacto'

import axios from "axios";



export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact children={<Inicio/>} />
          <Route path="/Contacto"  children={<Contacto/>} />
          <Route path="/:id" component={Detalle}  />
        </Switch>
      </Router>
  );
}




class Inicio extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listaProductosHome : []
    };
    this.mostrarProducto();
  }

  mostrarProducto() {
    axios.get('/productos').then(response => {
      this.setState({
        listaProductosHome : response.data

      });
    });

  }

render() {
  return(
    <div className="App">
        <MenuSuperior></MenuSuperior>
        <Encabezado></Encabezado>
        <div class="container">
          <div class="row">
            <LoQueHacemos></LoQueHacemos>
            <Contactanos></Contactanos>
          </div>

          <div class="row">
            {this.state.listaProductosHome.map((item) => (
              <Producto datosProducto={item}></Producto>
            ))}
          </div>
          
        </div>
        <Pie></Pie>
      </div>
  )
}
}

