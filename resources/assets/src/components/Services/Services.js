import React, {Component} from 'react';
import Header from './../../scenes/components/Header';
import TabsList from './scenes/components/TabList';

/**
 * Services component
 */
class Services extends Component {
    render() {
        return (
            <div>
                <Header title={'Services'}/>
                <TabsList/>
            </div>
        );
    }
}

export {Services};