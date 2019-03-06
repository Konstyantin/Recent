import React, {Component} from 'react';
import Header from './../../scenes/components/Header';
import Works from './scenes/components/Works';

const Gallery = () => (
    <div>
        <Header title={'Our works'}/>
        <Works/>
    </div>
);

export {Gallery};