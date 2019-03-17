import React, {Component} from 'react';
import renderRoutes from './../../_components';

import './style.css';

/**
 * App component
 */
class App extends Component {

    render() {
        const {routes} = this.props.route;

        return (
            <div className={'content-body'}>
                {renderRoutes(routes)}
            </div>
        );
    }
}

export {App}