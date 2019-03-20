import React, {Component} from 'react';
import renderRoutes from './../../../../../_components';

/**
 * Service component
 */
class Services extends Component{

    render() {
        const {routes} = this.props.route;

        return(
            <div>
                {renderRoutes(routes)}
            </div>
        );
    }
}

export default Services;