import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form action="">
      <p>
        <label htmlFor="nome">Nome</label>
        <Input Name="nome"/>
      </p>
      <p>
        <label htmlFor="mail">E-mail</label>
        <Input Name="email"/>
      </p>
      <Button />

    </form>
  )
}

export default Form
