import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const styles = theme => ({});

/**
 * Map with marker
 * @type {React.ComponentClass<*>}
 */
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: 49.988358, lng: 36.232845}}
    >
        <Marker
            position={{lat: 49.988358, lng: 36.232845}}
        />
    </GoogleMap>
));

/**
 * Map container
 */
class MapContainer extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props)
    }

    /**
     * Render component
     * @returns {*}
     */
    render() {
        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAV0OYnRMGOatJK-Gw1IMelfNZeTu1o5GQ&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
}

export default withStyles(styles)(MapContainer);