import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-auhhzee9.us.auth0.com'
        clientId='FCc5GTHNQXQQearB41RdCyCWaX9Cle1z'
        redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
