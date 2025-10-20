import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostChange} from './redux/State';
import {BrowserRouter} from 'react-router-dom'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App 
        appState={state}
        addPost={addPost}
        updateNewPostChange={updateNewPostChange}
      />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

reportWebVitals();
