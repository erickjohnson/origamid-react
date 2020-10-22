import React from 'react';

function App() {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  const [dados, setDados] = React.useState(luana);
  
    const compraValores = dados.compras.map( compra => {
      return Number(compra.preco.replace('R$ ', ''));
    })
    console.log(compraValores)

    const totalCompras = compraValores.reduce( (total, compra) => {
      return total + compra
    })
  
  return (<div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span Style={dados.ativa? 'color:green' : 'color:red'}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
      <p>Total gasto: { totalCompras}</p>
      { totalCompras > 10000 && <p>Você está gastando muito</p>}
      <button onClick={() => setDados(mario)}>Mario</button>
      <button onClick={() => setDados(luana)}>Luana</button>
    </div>
  )
}

export default App
