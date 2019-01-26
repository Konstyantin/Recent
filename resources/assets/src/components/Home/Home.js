import React, {Component, Fragment} from 'react';
import { MDBBtn } from "mdbreact";

import Carousel from './scenes/components/Carousel';
import ServicesCard from './scenes/components/ServicesCard';
import About from './scenes/components/About';
import Repairs from './scenes/components/Repairs';

/**
 * Home component
 */
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <ServicesCard/>
                <About/>
                <Repairs/>
            </div>
        );
    }
}

export {Home};