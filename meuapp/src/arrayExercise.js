import React from 'react';

function App() {
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const produtosFiltro = produtos.filter( produto => Number(produto.preco.replace('R$ ','')) > 1500)
  
  return (
    <> 
      {produtosFiltro
        .map(produto => 
          <div>
            <h1>{produto.nome}</h1> 
            <p Style={'font-weight:bold'}>{produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>)
      } 
    </>
  );
}

export default App;