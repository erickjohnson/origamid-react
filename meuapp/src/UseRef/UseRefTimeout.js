import React from 'react'

const UseRefTimeout = () => {
  const [comments, setComments] = React.useState(['teste','teste22'])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()
  const [notification, setNotification] = React.useState('')
  const timeout = React.useRef()

  function handleClick() {
    setComments([...comments, input])
    setNotification('Adicionado com sucesso!')
    setInput('')
    inputElement.current.focus()

    clearTimeout(timeout.current)
    timeout.current=  setTimeout(() => {
      setNotification('')
    }, 2000)
  }
  React.useEffect(() => {
  }, [])
  return (
    <div>
      <ul>
        <p>{notification}</p>
        {
          comments.map(comment => 
            <li key={comment}>{comment}</li> )
        }
      </ul>
      
      <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
      <button onClick={handleClick}>Adicionar comentário</button>
    </div>
  )
}

export default UseRefTimeout
