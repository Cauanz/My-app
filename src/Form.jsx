

function Form() {

   function cadastrarUsuario(event) {
      event.preventDefault();
      alert('Cadastrando usuário...');
   }


   return (
      <>
         <h1>Form</h1>
         <form onSubmit={cadastrarUsuario}>
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu nome..." /> <br></br>
            <label>Idade:</label>
            <input type="text" placeholder="Digite sua idade..." />

            <button type="submit">Enviar</button>
         </form>
      </>
   )
}

export default Form