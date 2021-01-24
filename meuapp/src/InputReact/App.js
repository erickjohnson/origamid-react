import React from 'react'

function App() {
  const [form, setForm] = React.useState({name: '', email: ''})

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
  }

  function handleChange({target}){
    const {id, value } = target
    setForm({...form, [id]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" value={form.name} 
      onChange={handleChange}/>
      
      <input type="email" id="email" value={form.email} 
      onChange={handleChange}/>
      <button type="submit" ></button>
    </form>
  )
}

export default App

