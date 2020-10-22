import React from 'react'

const Titulo = ({cor, texto, children}) => {
  return (
    <h2 style={{color:cor}}>
      {texto} 
      {children}
    </h2>
  )
}

export default Titulo
