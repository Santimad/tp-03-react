import diskete from './assets/guardar.png';

let price = 0;

export default function Price( { fields, hidden = true, setHidden }) {
  const guardarCotizacion = (event) => {
    const nuevaCotizacion = JSON.parse(JSON.stringify(fields));
    const historialCotizaciones = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
    historialCotizaciones.push(nuevaCotizacion);
    if(localStorage.getItem('historialCotizaciones')){
      localStorage.removeItem('historialCotizaciones');
    }
    localStorage.setItem('historialCotizaciones', JSON.stringify(historialCotizaciones));
    setHidden(hidden = true);
  }

  return (
    <div className="row">
      <div className="column align-center price">
	<p class='price'> Precio estimado: $ {fields.poliza}
	  <img onClick={guardarCotizacion} className="icon" 
	       height='48' width='48' src={diskete} 
	       alt="diskete" hidden={hidden} />
	</p>
      </div>
    </div>    
  );
}
