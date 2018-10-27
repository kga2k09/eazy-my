import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Product extends Component {

    render() {
        return (
            <Col className="prod-col">
                <Row className="prod-row">
                    <Col xs="12" md="7">
                        <p className="prod-name">Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</p>
                    </Col>
                    <Col md="5"></Col>
                </Row>
                <Row className="prod-row">
                    <Col xs="12" md="7" className="prod-col">
                        <div className="prod-div">
                            <div>
                                <img src={require("../../assets/Image 5.png")} className="prod-img" />
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="4" className="prod-col">
                        <div className="prod-div">
                            <Row className="fav-row">
                                <Col xs="7">
                                    <Row>
                                        <img src={require("../../assets/ic_favorite_border_black_36px.svg")} className="fav-icon" />
                                        <span className="fav-txt">Wishlist</span>
                                    </Row>
                                    <Row className="price-row">
                                        <Col xs="12">
                                        <p className="price-tag">Price<span className="price">
                                           RM1,289</span></p>           
                                    </Col>
                                    <Col xs="12">
                                        <p>Item condition <span className="brand-txt">Brand new in the box</span></p>
                                    </Col>
                                    <Col xs="12">
                                        <p>Item location <span className="brand-txt">Bangsar south, Kuala lumpur</span></p>
                                    </Col>
                                    <Col xs="12">
                                        <Row>
                                            <Col xs="12">
                                                <Row>
                                                    <Col xs="12">
                                                        <p>Seller info</p>
                                                    </Col>
                                                </Row>
                                                <Row className="nopadding">
                                                    <Col xs="12">
                                                        <img src={require("../../assets/ic_account_circle_black_36px.svg")} className="useicon" />
                                                        <span>Takeshi Nakamura</span>
                                                        {/* <span>Private seller</span> */}
                                                    </Col>
                                                    
                                                </Row>
    
                                            </Col>
                                        </Row>
                                       
                                    </Col>
                            </Row>
                                   
                                </Col>
                                <Col xs="5">
                                    <img src={require("../../assets/ic_share.svg")} className="share-icon" />
                                    <span className="fav-txt">Share</span>
                                </Col>
                            </Row>
                            <Row className="support-div">
                                <Col xs="12">
                                    <span>Interested with the ad? Contact the seller</span>
                                </Col>
                                <Col xs="12">
                                <button type="button" className="btn  btn-light btn-block cust-btn phn-btn">  
                                    <FontAwesomeIcon icon="phone" /><span className="contact-txt">017 6895xxx</span>
                                </button>
                                </Col>
                                <Col xs="12">
                                <button type="button" className="btn  btn-light btn-block cust-btn email-btn ">
                                    
                                    <FontAwesomeIcon icon="envelope"/><span  className="contact-txt">Email</span>
                                </button>
                                </Col>
                                <Col xs="12">
                                <button type="button" className="btn  btn-light btn-block cust-btn chat-btn">
                                <FontAwesomeIcon icon="comments"/>
                                    <span  className="contact-txt">Chat</span>
                                </button>
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>
                </Row>

            </Col>
        )
    }
}

export default Product;