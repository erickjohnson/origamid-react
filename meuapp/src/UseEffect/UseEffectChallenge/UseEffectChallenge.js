import React from 'react'
import Produto from './Produto'

const UseEffectChallenge = () => {
  const [dados, setDados] = React.useState(null)
  const [preferences, setPreferences] = React.useState(null)

  React.useEffect(()=>{
    if (localStorage.getItem('produto')){
      setPreferences(localStorage.getItem('produto'))
      fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${localStorage.getItem('produto')}`,
      ).then(
        response => response.json()
      ).then( 
        json => setDados(json)
      )
    }
  },[])


  async function handleClick(produto){ 
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
    const json = await response.json();
    setDados(json)
    localStorage.setItem('produto', produto)
    setPreferences(produto)
  }

  return (
    <div>
      {preferences && <h1>Preferência: {preferences}</h1>}
      <button style={{marginRight:'10px'}} onClick={() => handleClick('notebook')}>notebook</button>
      <button style={{marginRight:'10px'}} onClick={() => handleClick('smartphone')}>smartphone</button>
      {dados && <Produto dados={dados} />}
    </div>
  )
}

export default UseEffectChallenge
