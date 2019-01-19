import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../../_helpers';
import { publicRoutes } from '../../_routes'
import { RouteMapRoutes } from '../../_components';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <RouteMapRoutes routes={publicRoutes}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export {App}