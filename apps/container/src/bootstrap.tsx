import * as ReactDOM from 'react-dom/client';
import { Themes } from '@karso-administrador/themes';
import { StrictMode } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Background } from '@karso-administrador/UI';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Themes>
      <CssBaseline />
      <Background />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Themes>
  </StrictMode>
);
