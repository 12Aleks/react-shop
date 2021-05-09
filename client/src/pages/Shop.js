import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container className='shop'>
            <Row className='mt-3 mb-3'>
                <Col md={{ span: 9, offset: 3 }} >
                    <BrandBar />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                  <TypeBar/>
                </Col>
                <Col md={9}>
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;