import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CoinContext from './CoinContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <CoinContext>
     <App />
    </CoinContext>
  </React.StrictMode>,
  document.getElementById('root')
);
