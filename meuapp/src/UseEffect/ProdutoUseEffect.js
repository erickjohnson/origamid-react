import React from 'react'


const ProdutoUseEffect = () => {

  React.useEffect(()=> {
    function handleScroll(){
      console.log('scroll')
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div style={{height: '300px;'}}>
      <p>Meu produto</p>
    </div>
  )
}

export default ProdutoUseEffect
