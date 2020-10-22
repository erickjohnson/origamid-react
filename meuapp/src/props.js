import React from 'react'

const Titulo = (props) => {
  return <h1>{props.texto}</h1>
}
const props = () => {
  return (
    <div>
      <Titulo texto='Titulo' />
    </div>
  )
}

export default props
