import diskete from './assets/guardar.png';


export default function Price({ onClick, cotizacion, hidden }) {

  return (
    <div className="row">
      <div className="column align-center price">
	<p class='price'> Precio estimado: $ {cotizacion.poliza}
	  <img onClick={onClick} className="icon" 
	       height='48' width='48' src={diskete} 
	       alt="diskete" hidden={hidden} />
	</p>
      </div>
    </div>    
  );
}
