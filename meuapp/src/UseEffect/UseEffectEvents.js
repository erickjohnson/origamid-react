import React from 'react'
import ProdutoUseEffect from './ProdutoUseEffect';

const UseEffectEvents = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Desativar' : 'Ativar'}</button>
      { ativo && <ProdutoUseEffect /> }
    </div>
  )
}

export default UseEffectEvents
