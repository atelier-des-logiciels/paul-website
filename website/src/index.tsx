import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.css';
import App from 'App';

function start() {
  const rootElement = document.getElementById('app-root')!;
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

start();
