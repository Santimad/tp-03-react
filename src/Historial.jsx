import { Title } from './Title.jsx';
import { Wrapper } from './Wrapper.jsx';
import Button from './Button.jsx';
import Table from './Table.jsx';
import { Link } from 'react-router-dom';


export default function () {

  return (
    <>
      <Title title text="Ver Historial" />
      <Wrapper history>
	<Table />
	<div className="row">
	  <div className="column align-center">
	    <Link className="button button-outline" to="/"> 
	      Volver 
	    </Link>
	  </div>
	</div>
      </Wrapper>
    </>
  );
}
