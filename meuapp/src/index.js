import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Components from './components';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';
import Props from './props';
import UiExercise from './UiExercise/UiExercise';

ReactDOM.render(
  <React.StrictMode>
    <UiExercise />
  </React.StrictMode>,
  document.getElementById('root')
);
