import { Title } from './Title.jsx';
import { Wrapper } from './Wrapper.jsx';
import Form from './Form.jsx';
import Price from './Price.jsx';
//import Button from './Button.jsx';
import portapapel from './assets/historial.png';
import Cotizador from './cotizador.js';

import * as React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const swalAlert = (message, icon = 'warning') => {
  Swal.fire({
    text: message || '',
    icon: icon,
    timer: 3000,
    showConfirmButton: false
  });
}

export default function Inicio() {
  const [cotizacion, setCotizacion] = React.useState({
    propiedad: 'default',
    ubicacion: 'default',
    date: undefined,
    area: 20,
    poliza: 0..toFixed(2),
    isDefault: function() {
      if(this.propiedad === 'default' || 
	 this.ubicacion === 'default') {
	return true;
      }
      return false;
    }
  });
  const [hidden, setHidden] = React.useState(true);

  const handleInput = (event) => {
    const {name, value, options, selectedIndex} = event.target;
    let text;

    if(options) {
      text = options[selectedIndex].text;
      setCotizacion({...cotizacion, [name]: text});
    } else{
      setCotizacion({...cotizacion, [name]: value});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {propiedad, ubicacion} = event.target;

    if(cotizacion.isDefault()){
      swalAlert("Debes completar todos los campos.");
    }
    else { 
      swalAlert("Cotización exitosa.", "success");
      let coti = new Cotizador(propiedad.value, ubicacion.value, cotizacion.area);
      setCotizacion({...cotizacion, poliza: coti.cotizarPoliza(), date: new Date().toLocaleString() });
      setHidden(false); 
    }
  }

  const guardarCotizacion = (event) => {
    const nuevaCotizacion = cotizacion;

    const historialCotizaciones = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
    historialCotizaciones.push(nuevaCotizacion);
    if(localStorage.getItem('historialCotizaciones')){
      localStorage.removeItem('historialCotizaciones');
    }
    localStorage.setItem('historialCotizaciones', JSON.stringify(historialCotizaciones));

    setHidden(true);
  }

  return (
    <>
      <div className="historial">
	<Link to="/historial">
	  <img  height="48" width="48"
		src={portapapel} alt="..." />
	</Link>
      </div>
      <Title text="Seguros del hogar" title />
      <Wrapper>
	<Title text="Completa los datos solicitados." />
      	<Form handleSubmit={handleSubmit} handleInput={handleInput}>
	</Form>
      	<Price onClick={guardarCotizacion} cotizacion={cotizacion} 
		    hidden={hidden} />
      </ Wrapper>
    </>
  );
}
