import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';

/**
 * Services component
 */
class Services extends Component {
    render() {
        const {route} = this.props;

        return (
            <div>
                Services component
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export {Services};