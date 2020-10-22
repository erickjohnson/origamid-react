import React from 'react'

const List = ({produtos}) => {
  return (
    <>
      {
        produtos
        .map(produto => (
          <div Style={'border:1px solid black;padding:20px;margin-bottom:20px'}>
            <h3>{produto.nome}</h3>
            {
              produto.propriedades
              .map(prop => (
                <li key='prop'>{prop}</li>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default List
