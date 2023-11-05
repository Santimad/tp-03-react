import hogar from './assets/hogar.png';
import portapapel from './assets/historial.png';

export function Title({ title, text }){
  const icon = text.includes('hogar') ? hogar : portapapel; 


  return (
    <div class={title ? "container" :  "container title"}>
	  { title ? (
          <h1 className="heading"> 
	    {text}
	  <img className="icon" height="64" width="64" 
	      src={icon} alt="" />
	  </h1> ) : (
	    <h2> {text} </h2>
	  )}
    </div>
  );
}
