import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostChange} from './redux/State';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        appState={state}
        addPost={addPost}
        updateNewPostChange={updateNewPostChange}
      />
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

reportWebVitals();
