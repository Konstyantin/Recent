import React, {Component} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";

import './style.css';

/**
 * Service Card component
 */
const ServicesCard = () => (
    <div className='service-list-container'>
        <MDBContainer>
            <h2 className='text-center'>Services</h2>
            <MDBRow>
                <MDBCol size="4">
                    <MDBCard style={{width: "22rem"}}>
                        <MDBCardImage className="img-fluid"
                                      src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol size="4">
                    <MDBCard style={{width: "22rem"}}>
                        <MDBCardImage className="img-fluid"
                                      src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol size="4">
                    <MDBCard style={{width: "22rem"}}>
                        <MDBCardImage className="img-fluid"
                                      src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
);

export default ServicesCard;