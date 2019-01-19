import React from 'react';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

export const RouteMapRoutes = ({routes}) => (routes.map((route) => (
    <RouteWithSubRoutes key={route.path} {...route} />
)));