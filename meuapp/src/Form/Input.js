import React from 'react'

const Input = ({id, label, ...props}) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} type="text"/>
    </p>
  )
}

export default Input
