import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import { AuthProvider } from '@descope/react-sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider projectId='P2Pt770Z3xWUShULNsgtR8DtQE6T'>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </AuthProvider>
);
