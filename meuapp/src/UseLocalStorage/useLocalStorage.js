import React from 'react'

const useLocalStorage = (key, initial) => {

    const [state, setState] = React.useState(()=> {
      const localStorage = window.localStorage.getItem(key);
      return localStorage ? localStorage : initial
    })

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state,key])

  return [state, setState]
}

export default useLocalStorage