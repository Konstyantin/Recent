import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
import Header from './scenes/components/Header';
import List from './scenes/components/List';

/**
 * Services component
 */
class Services extends Component {
    render() {
        const {route} = this.props;

        return (
            <div>
                <Header/>
                <List/>
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export {Services};