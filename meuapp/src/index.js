import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
