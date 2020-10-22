import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Produtos from './Produtos'

const { pathname } = window.location;

const Content = () => {
  if(pathname.includes('produtos'))
    return <Produtos />
  else
    return <Home />
}
function UiExercise() {
  return (
    <>
      <Nav />
      <Content />
    </>
  )
}

export default UiExercise
