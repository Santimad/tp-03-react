import * as React from 'react';

const ellipsis = String.fromCodePoint(0x2026);

export default function Form({content, setContent, onClick, onChange}) {
  const [data, setData] = React.useState([]); 
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
   fetch("https://6546a8fcfe036a2fa955ecda.mockapi.io/data1")
     .then((response) => response.json())
     .then((data1) => setData(data1))
     .catch(error => {
       alert("Ocurrió un error inesperado.");
       console.log("Ocurrió un error inesperado.");
       setDisabled(true);
     }) 
  }, []);
  
  return (
    <form onSubmit={onClick}>
      <ul>
        <li class="align-center" >
	  <label htmlFor="propiedad" class="align-center">
	    Selecciona el tipo de propiedad
	  </label>
	  <select onChange={onChange} 
		  id="propiedad" 
		  name="propiedad" >
	    <option value={ellipsis} selected disabled> 
	    {ellipsis} </option>

	    {data.map(elem => 
	      (elem.categoria === 'propiedad') && <option 
		value={elem.factor}> {elem.tipo} </option>
	    )}

	  </select>
	</li>
	<li class="align-center" >
	  <label htmlFor="ubicacion" class="align-center"> 
	  Selecciona su ubicación </label>
	  <select onChange={onChange}
		  id="ubicacion" 
		  name="ubicacion" >
	    <option value={ellipsis} selected disabled> 
	    {ellipsis} </option>

	    {data.map(elem => 
	      (elem.categoria === 'ubicacion') && <option 
		value={elem.factor}> {elem.tipo} </option>
	    )}

	  </select>
	</li>
	<li class="align-center" >
	  <label htmlFor="area" class="align-center"> 
	    Ingrese los metros cuadrados:</label>
	  <input onChange={onChange}
		 type="number"
		 placeholder="20" 
		 min="20"
		 max="500"
		 id="area" 
		 name="area" required/>
	</li>
	<li class="align-center submit">
	  <button type="submit" className="button-outline"
		  disabled={disabled}>
	    {content}
	  </button>
	</li>
      </ul>
    </form>
  );
}
