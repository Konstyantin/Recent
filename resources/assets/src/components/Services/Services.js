import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
import Header from './../../scenes/components/Header';
import TabsList from './scenes/components/TabList';

/**
 * Services component
 */
class Services extends Component {
    render() {
        const {route} = this.props;

        return (
            <div>
                <Header title={'Services'}/>
                <TabsList/>
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export {Services};