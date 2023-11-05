

export default function Button({onClick, children}) {

  return (
	  <button onClick={onClick} class="button-outline" > 
   	     {children}
   	   </button>
  );
}

export function CotizarButton() {

  return (
    <Button> Cotizar </Button>
  );
}
