import React, { Component } from 'react';
import Header from './../../scenes/components/Header'
import Context from './scenes/components/Context'

class About extends Component {
    render() {
        return (
            <div>
                <Header title={'About Us'}/>
                <Context/>
            </div>
        );
    }
}

export { About };