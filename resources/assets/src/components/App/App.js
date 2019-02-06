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
        const {route} = this.props;

        return (
            <div className={'content-body'}>
                <Navbar/>
                {renderRoutes(route.routes)}
                <Footer/>
            </div>
        );
    }
}

export {App}