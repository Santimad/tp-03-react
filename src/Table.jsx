
export default function() {
  const historial = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
  
  return (
    <table >
      <thead>
	<tr>
	  <th> Fecha de cotización </th>
	  <th> Propiedad </th>
	  <th> Ubicación </th>
	  <th> Metros cuadrados</th>
	  <th> Poliza mensual </th>
	</tr>
      </thead>
      <tbody>
	{historial.map(cotizacion => (
	  <tr>
	    <td> {cotizacion.date} </td>
	    <td> {cotizacion.propiedad} </td>
	    <td> {cotizacion.ubicacion} </td>
	    <td> {cotizacion.area} </td>
	    <td> $ {cotizacion.poliza} </td>
	  </tr>
	))}
      </tbody>
    </table>
  );
}
