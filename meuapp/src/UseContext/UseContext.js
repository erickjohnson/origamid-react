import React from 'react'
import {GlobalStorage} from './GlobalContext'
import ContextProduct from './ContextProduct'

const UseContext = () => {
  return (
    <GlobalStorage>
      <ContextProduct></ContextProduct>
    </GlobalStorage>
  )
}

export default UseContext