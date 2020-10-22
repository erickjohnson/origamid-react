import React from 'react'

const Titulo = ({cor, texto, children}) => {
  return <h1 style={{color:cor}}>{texto}, {children}</h1>
}
const props = () => {
  return (
    <div>
      <Titulo cor='red' texto='Titulo'>
        <p>Texto children</p>
      </Titulo>
    </div>
  )
}

export default props
