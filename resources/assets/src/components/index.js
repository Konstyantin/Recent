import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {history} from '../_helpers';
import {renderRoutes} from "react-router-config";
import {publicRoutes} from "../_routes";

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


render(
    <Router history={history}>
        <div>
            {renderRoutes(publicRoutes)}
        </div>
    </Router>,
    document.getElementById('app')
);