import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { FirebaseProvider } from "./context/firebase"; // Import FirebaseProvider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider> {/* Wrap App with FirebaseProvider */}
      <App/>
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
