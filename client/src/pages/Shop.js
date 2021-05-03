import React from 'react';
import {Col, Container, Row, ListGroup} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container className='shop'>
            <Row className='mt-3'>
                <Col md={{ span: 9, offset: 3 }} className="pb-3">
                    <BrandBar />
                </Col>
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