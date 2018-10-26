import React, { Component } from 'react';
import {Col} from 'reactstrap';
import './index.css'
class Header extends Component {

    render() {
        return(
            <Col className="header">
                <img src={require("../../assets/easy.svg")} className="header-img"/>
            </Col>
        )
    }
}

export default Header;