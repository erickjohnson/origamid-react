import React from 'react'
import useLocalStorage from "./useLocalStorage"

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({target}){
    setProduto(target.innerText);
  }
  return (
    <div>
    <div>
      {localStorage.produto}
    </div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  )
}
export default App