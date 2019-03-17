import React, {Component} from 'react';
import renderRoutes from "../../_components";
import NavBar from './../../scenes/components/Navbar'
import Footer from './../../scenes/components/Footer'

class Guest extends Component {
    render() {
        const {routes} = this.props.route;

        return (
            <div className={'content-body'}>
                <NavBar/>
                {renderRoutes(routes)}
                <Footer/>
            </div>
        );
    }
}

export {Guest};