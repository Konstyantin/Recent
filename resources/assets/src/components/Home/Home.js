import React, {Component} from 'react';

import Carousel from './scenes/components/Carousel';
import ServicesCard from './scenes/components/ServicesCard';
import About from './scenes/components/About';
import Repairs from './scenes/components/Repairs';
import Statistics from './scenes/components/Statistics';

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
                <Statistics/>
            </div>
        );
    }
}

export {Home};