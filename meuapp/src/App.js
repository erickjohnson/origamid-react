import React from 'react';

function App() {
  const random = Math.random();
  const active = true;

  const title = <h1>'JSX Tests' </h1>
  function showNameLastName(lastName) {
    return 'Erick ' + lastName
  }
  return (
    <>
      {title}
      <p className={active ? 'ativo' : ''}>{random}</p>
      <p>{showNameLastName('Johnson')}</p>
    </>
  );
}

export default App;
