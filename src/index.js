import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"
import { Provider } from 'react-redux';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    closeOnClick
    pauseOnHover
   theme="dark"
/>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
