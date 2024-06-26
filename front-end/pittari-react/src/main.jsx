import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // non dimentichiamo il provider Redux
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '../src/sass/style.scss';
import store from './state/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './state/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider Redux per avvolgere l'applicazione, devo implementare la logica di redux persist */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
