import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './Store';
import { ConnectedRouter } from 'react-router-redux'
import App from './App';
import registerServiceWorker from './serviceWorker';
import './index.scss'

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
