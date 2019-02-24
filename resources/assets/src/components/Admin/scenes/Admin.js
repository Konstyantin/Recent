import React, {Component} from 'react';
import { renderRoutes } from "react-router-config";

class Admin extends Component{
    render() {

        const {route} = this.props;

        return (
            <div>
                Admin component page
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export default Admin;