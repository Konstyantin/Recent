import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {history} from '../_helpers';
import renderRoutes from './../_components';
import {publicRoutes} from "../_routes";
import { Provider } from 'react-redux';
import {store} from '../_helpers';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

render(
    <Provider store={store}>
        <Router history={history}>
            {renderRoutes(publicRoutes)}
        </Router>
    </Provider>,
    document.getElementById('app')
);