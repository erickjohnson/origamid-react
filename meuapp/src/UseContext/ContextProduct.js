import React from 'react'
import { GlobalContext } from './GlobalContext'

const ContextProduct = () => {
  const context = React.useContext(GlobalContext)
  

  return (
    <>
      <div>{context.nome + context.sobrenome}</div>
      <p>{context.count}</p>
      <button onClick={context.countPlus}>Add count</button>
    </>
  )
}

export default ContextProduct
