import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {

    const user = getLocalStorageUser();
    
    return routes ? (
        <Switch {...switchProps}>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={props => {

                        if (route.permissions && (!user || !route.permissions.includes(user.role))) {
                            return <Redirect to={route.redirect}/>
                        }

                        return (
                            route.render ? (
                                route.render({ ...props, ...extraProps, route: route })
                            ) : (
                                <route.component {...props} {...extraProps} route={route} />
                            )
                        );
                    }}
                />
            ))}
        </Switch>
    ) : null;
};

const getLocalStorageUser = () => {
    let user = localStorage.getItem('user');

    (user) ? user = JSON.parse(localStorage.getItem('user')) : user = null;

    return user;
};

export default renderRoutes;