import React from 'react'

const UseRef = () => {
  const [comments, setComments] = React.useState(['teste','teste22'])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()

  function handleClick() {
    setComments([...comments, input])
    setInput('')
    inputElement.current.focus()
  }
  React.useEffect(() => {
  }, [])
  return (
    <div>
      <ul>
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

export default UseRef
