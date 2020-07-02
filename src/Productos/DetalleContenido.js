import React from "react";
import Opinion from "../Opiniones/Opinion";
import { withRouter } from "react-router-dom";
import axios from 'axios';



class Detalle extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      listaProductosHome : []
    };
    this.mostrarProductos();
  }
  

  mostrarProductos(){
    axios.get('/productos/', {
      params: '5ec817314d1435419c4c4681'
    }).then(response => {
      this.setState({
        listaProductosHome: response.data.nombre
      });
      console.log(response.data)
    });
    
  }

  componentDidMount() {
    this.mostrarProductos();
  }


  render() {
    return (
      <div class="col-lg-9">
        <div class="card mt-4">
          <img
            class="card-img-top img-fluid"
            src={this.state.imagen}
            alt=""
          />
          <div class="card-body">
            <h3 class="card-title">{this.state.nombre}</h3>
            <h4>{this.state.precio}</h4>
            <p class="card-text">{this.state.descripcion}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detalle);
