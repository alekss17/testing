import './index.css';
import store from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={store.StateReturn()}
          addPost={store.addPost}
          updateNewPostChange={store.updateNewPostChange}
          updateNewDialogChange={store.updateNewDialogChange}
          addMessage={store.addMessage}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.StateReturn());