import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
  const [count, setCount] = React.useState(0);
  function countPlus(){
    setCount((count)=> count + 1)
  }
  return  <GlobalContext.Provider value={{nome: 'Erick', sobrenome: 'Johnson', count, countPlus}} >{children}</GlobalContext.Provider>
}