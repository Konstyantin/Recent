import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import Header from "../../scenes/components/Header/Header";
import Footer from "../../scenes/components/Footer/Footer";

/**
 * App component
 */
class App extends Component {

    render() {
        const {route} = this.props;

        return (
            <div>
                <Header/>
                {renderRoutes(route.routes)}
                <Footer/>
            </div>
        );
    }
}

export {App}