import React from 'react';
import ReactDOM from 'react-dom';
import PrimerApp from './PrimerApp';
import CounterApp from './CounterApp';
import './index.css';

//const saludos = <h1>Hola mundo</h1> ;

//console.log(saludos)

const divRoot = document.querySelector('#root');

//console.log(divRoot);
//<PrimerApp saludo = "hola mundo" otra = "123"/>

ReactDOM.render( <CounterApp value = { 1234 } />, divRoot);