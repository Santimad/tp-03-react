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
  const [fields, setFields] = React.useState({
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
      setFields({...fields, [name]: text});
    } else{
	setFields({...fields, [name]: value});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(fields.isDefault()){
      swalAlert("Debes completar todos los campos.");
    }
    else { 
      swalAlert("Cotización exitosa.", "success");
      let coti = new Cotizador(event.target.propiedad.value,event.target.ubicacion.value, fields.area);
      setFields({...fields, poliza: coti.cotizarPoliza(),
		 date: new Date().toLocaleString() });
      setHidden(false); 
    }
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
      	<Price setHidden={setHidden} fields={fields} 
		    hidden={hidden}/>
      </ Wrapper>
    </>
  );
}
