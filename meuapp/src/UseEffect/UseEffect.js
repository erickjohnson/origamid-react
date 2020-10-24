import React from 'react'

const UseEffect = () => {
  const [contador, setContador] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  
  React.useEffect(() => {
    fetch(
      'https://ranekapi.origamid.dev/json/api/produto/',
    ).then(
      response => response.json()
    ).then( 
      json => setDados(json)
    )
  }, [])


  return (
    <div>
      <button onClick={() => setContador(contador + 1 )}>{contador}</button>
      {dados && <p>{dados[0].nome}</p> }
    </div>
  )
}

export default UseEffect
