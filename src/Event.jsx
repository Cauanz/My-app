
function Evento({numero}) {

   function meuEvento() {
      alert("Você clicou no botão número " + numero + "!")
   }

   return(
      <div>
         <h1>Clique para disparar um evento</h1>
         <button onClick={meuEvento}>Clique aqui</button>
      </div>
   )
}

export default Evento;