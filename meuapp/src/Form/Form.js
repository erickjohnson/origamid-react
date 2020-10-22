import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form action="">
      <Input id='name' label='Nome' type="text"/>
      <Input id='password' label="Senha" type="password" required/>
      <Button /> 

    </form>
  )
}

export default Form
