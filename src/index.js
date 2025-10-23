import './index.css';
import state, { addPost, updateNewPostChange, updateNewDialogChange, addMessage, subscribe, } from './redux/State';
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
          appState={state}
          addPost={addPost}
          updateNewPostChange={updateNewPostChange}
          updateNewDialogChange={updateNewDialogChange}
          addMessage={addMessage}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);