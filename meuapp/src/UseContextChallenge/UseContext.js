import React from 'react'
import {GlobalStorage} from './GlobalContext'
import Produto from './Produto'

const UseContext = () => {
  return (
    <GlobalStorage>
      <Produto></Produto>
    </GlobalStorage>
  )
}

export default UseContext