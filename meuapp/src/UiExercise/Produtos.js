import React from 'react'
import List from './List';
import Titulo from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function Produtos() {
  return (
    <div>
      <Titulo cor='green' texto='Produtos' />
      <List produtos={produtos} />
    </div>
  )
}

export default Produtos
