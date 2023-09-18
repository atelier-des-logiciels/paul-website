import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

function start() {
  const rootElement = document.getElementById('app-root')!;
  const root = ReactDOMClient.createRoot(rootElement);
  

  root.render(
    <StrictMode>
      <BrowserRouter>
        <div>Hello</div>
      </BrowserRouter>
    </StrictMode>
  );
}

start();
