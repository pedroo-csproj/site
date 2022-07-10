import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import styled from 'styled-components';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = styled.body`
  font-family: 'Lato', sans-serif;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #333333;
`;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
