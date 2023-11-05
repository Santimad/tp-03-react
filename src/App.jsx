import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio.jsx';
import Historial from './Historial.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route path='/' Component={Inicio} />
	<Route path='/historial' Component={Historial} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
