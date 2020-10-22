import React from 'react'

const Input = ({id, label, type, ...props}) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} type={type}/>
    </p>
  )
}

export default Input
