import React, { Component } from 'react';
import Header from './../../scenes/components/Header'
import Context from './scenes/components/Context'

/**
 * About page component
 */
const About = () => (
    <div>
        <Header title={'About Us'}/>
        <Context/>
    </div>
);

export { About };