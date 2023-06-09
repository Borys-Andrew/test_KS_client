import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
// import './style/index.scss';
import { App } from './App';
// import { ActionProvider } from './context/ActionContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
