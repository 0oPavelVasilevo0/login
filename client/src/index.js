import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

if (!clientId) {
  throw new Error('Google client ID is not provided in environment variables.');
}

// {/* <GoogleOAuthProvider clientId="307229413691-phehas940d3b718383i9fo92ps613ekp.apps.googleusercontent.com"> */}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();