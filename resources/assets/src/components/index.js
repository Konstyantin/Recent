import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers';
import { renderRoutes } from "react-router-config";
import {publicRoutes} from "../_routes";

render(
    <Router history={history}>
        <div>
            {renderRoutes(publicRoutes)}
        </div>
    </Router>,
    document.getElementById('app')
);