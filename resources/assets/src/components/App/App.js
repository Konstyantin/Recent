import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import Navbar from "../../scenes/components/Navbar/Navbar";
import Footer from "../../scenes/components/Footer/Footer";
import './style.css';

/**
 * App component
 */
class App extends Component {

    render() {
        const {routes} = this.props.route;

        return (
            <div className={'content-body'}>
                <Navbar/>
                    {renderRoutes(routes)}
                <Footer/>
            </div>
        );
    }
}

export {App}