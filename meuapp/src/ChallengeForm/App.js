import React from 'react'

function App() {
  const [form, setForm] = React.useState({
    nome: '', 
    email: '', 
    senha: '', 
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  })
  const [fetchResponse, setFetchResponse] = React.useState(null)
  const [error, setError] = React.useState(null)

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(form),
    }).then(response=> {
      setFetchResponse(response.status)
    }).catch (error => {
      setError('Error: ' + error.message)
    })
  }

  function handleChange({target}){
    const {id, value } = target
    setForm({...form, [id]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} 
      onChange={handleChange}/>
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={form.email} 
      onChange={handleChange}/>

      <label htmlFor="senha">senha</label>
      <input type="senha" id="senha" value={form.senha} 
      onChange={handleChange}/>

      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} 
      onChange={handleChange}/>
      
      <label htmlFor="rua">Rua</label>
      <input type="rua" id="rua" value={form.rua} 
      onChange={handleChange}/>
      
      <label htmlFor="numero">Número</label>
      <input type="number" id="numero" value={form.numero} 
      onChange={handleChange}/>
      
      <label htmlFor="bairro">Bairro</label>
      <input type="text" id="bairro" value={form.bairro} 
      onChange={handleChange}/>
      
      <label htmlFor="cidade">Cidade</label>
      <input type="text" id="cidade" value={form.cidade} 
      onChange={handleChange}/>
      
      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" value={form.estado} 
      onChange={handleChange}/>
      <button type="submit" >Enviar</button>
      {fetchResponse && fetchResponse.ok ? <div> {fetchResponse === '200' ? <div>Criado usuário com sucesso</div> : <div>Ouve um erro no envio do formulário</div>} </div> : ''}
      
    </form>
  )
}

export default App

