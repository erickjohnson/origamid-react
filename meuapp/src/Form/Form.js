import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form action="">
      <Input id='name' label='Nome'/>
      <Input id='password' label="Senha" required/>
      <Button />

    </form>
  )
}

export default Form
