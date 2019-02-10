import React, {Component} from 'react';
import Header from './../../scenes/components/Header';
import ContactForm from './scenes/components/ContactForm';
import MapContainer from './scenes/components/MapContainer';

/**
 * Contact component
 */
class Contact extends Component {
    render() {
        return (
            <div>
                <Header title={'Contact Us'}/>
                <ContactForm/>
                <MapContainer/>
            </div>
        );
    }
}

export {Contact};