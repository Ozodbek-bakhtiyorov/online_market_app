import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from "./GlobalStyles";
import Context from "./context/AppContext";
ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles/>
      <Context>
          <App />
      </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

