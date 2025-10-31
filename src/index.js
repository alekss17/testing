import './index.css';
import store  from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.subscribe( () => {
  rerenderEntireTree()
});

rerenderEntireTree();