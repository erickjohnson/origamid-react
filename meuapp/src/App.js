import React from 'react';

function App() {
  const random = Math.random();
  const active = true;
  return (
    <>
      <p className={active ? 'ativo' : ''}>{random}</p>
    </>
  );
}

export default App;
