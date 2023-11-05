
export function Wrapper({ history, children }) {
  return (
    <div class={history ? "container wrapper history" : "container wrapper"}>
      <div class="row">
        <div class="column">
           {children} 
        </div>
      </div>
    </div>
    
  );
}
