import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // non dimentichiamo il provider Redux
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.scss';
import store from './state/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider Redux per avvolgere l'applicazione, devo implementare la logica di redux persist */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
