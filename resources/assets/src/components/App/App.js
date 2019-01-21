import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";

/**
 * App component
 */
class App extends Component {

    render() {
        const {route} = this.props;

        return (
            <div>
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export {App}