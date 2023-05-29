import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./interceptors/axios";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); //import.meta.env.VITE_GOOGLE_CLIENT_ID
console.log('GOOGLE_CLIENT_ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
