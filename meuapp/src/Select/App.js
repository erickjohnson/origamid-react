import React from 'react'

function App() {
  const [select, setSelect] = React.useState(')')
  return (
    <form>
      <select value={select} onChange= {({target}) => setSelect(target.value)} name="select" id="select">
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="table">Tablet</option>
      </select>
      {select ? <div>{select}</div>: ''}
    </form>
  )
}

export default App
