import React from 'react'
import useLocalStorage from "../UseLocalStorage/useLocalStorage"
import useFetch from "./useFetch"

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading, error} = useFetch()

  function handleClick({target}){
    setProduto(target.innerText);
  }
  React.useEffect( () => {
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }

    fetchData()
  }, [])
  
  if(error !== null) return <p>{error.toString()}</p>
  if(loading) return <p>Carregando</p>
  return (
    <div>
      {data ? data.map(produto => (<button onClick={handleClick}> {produto.nome}</button> )) : null}
    <p> {localStorage.produto}</p>
    </div>
  )
}
export default App