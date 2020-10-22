import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Components from './components';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';
import Props from './props';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Props />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
