import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,Mapa} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
    
);


const mapa = ReactDOM.createRoot(document.getElementById('mapa'));
mapa.render(
    <Mapa/>,
);

