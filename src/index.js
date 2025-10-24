import './index.css';
import store from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addPost={store.addPost.bind(store)}
          updateNewPostChange={store.updateNewPostChange.bind(store)}
          updateNewDialogChange={store.updateNewDialogChange.bind(store)}
          addMessage={store.addMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.StateReturn());