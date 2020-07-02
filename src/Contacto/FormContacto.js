import React from "react";
import axios from "axios";

const colorRojo = {
  color: "darkred",
};

class FormContacto extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
      info: ""
    };
  }

  actualizaNombre = (event) => {
    this.setState({
      nombre: event.target.value,
    });
    
  };

  actualizaCorreo = (event) => {
    this.setState({
      correo: event.target.value,
    });
    
  };

  actualizaTelefono = (event) => {
    this.setState({
      telefono: event.target.value,
    });
    
  };

  actualizaMensaje = (event) => {
    this.setState({
      mensaje: event.target.value,
    });
   
  };

  handleSubmit = (event) => {
    
    const infosoporte = {
      nombre: this.state.nombre,
      correo: this.state.correo,
      telefono: this.state.telefono,
      mensaje: this.state.mensaje,
    };
    axios.post("/contacto", { infosoporte }).then((res) => {
      console.log(res);
      console.log(res.data);  

      alert(`Mensaje enviado`)

      this.setState({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
       
        
        info:'Gracias por contactarnos.'
      })
      
      event.preventDefault();

    });
      
    
  }


  render() {
    return (
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 mb-5">
          <hr class="my-4" />
          <form onSubmit={this.handleSubmit}>
            <div class="form-group row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.actualizaNombre}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="correo" class="col-sm-2 col-form-label">
                Correo
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="correo"
                  name="correo"
                  onChange={this.actualizaCorreo}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Telefono
              </label>
              <div class="col-sm-10">
                <input
                  type="phone"
                  class="form-control"
                  id="telefono"
                  name="telefono"
                  onChange={this.actualizaTelefono}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="mensaje" class="col-sm-2 col-form-label">
                Mensaje
              </label>
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  id="mensaje"
                  cols="5"
                  name="mensaje"
                  onChange={this.actualizaMensaje}
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
            <p style={colorRojo}>{this.info}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default FormContacto;