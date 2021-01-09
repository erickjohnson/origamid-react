import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if(global.produto === null) return null;
  console.log(global.produto)
  return (
    <div>
      <button onClick={global.limparDados}>LimparDados</button>
      Produto: {global.produto.map(produto=> <li key={produto.id}>{produto.nome}</li>)}
    </div>
  );
};

export default Produto;