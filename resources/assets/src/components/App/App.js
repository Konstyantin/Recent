import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import Header from "../../scenes/components/Header/Header";
import Footer from "../../scenes/components/Footer/Footer";
import {Container, Row, Col} from 'reactstrap';
import './style.css';

/**
 * App component
 */
class App extends Component {

    render() {
        const {route} = this.props;

        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col>
                            {renderRoutes(route.routes)}
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export {App}