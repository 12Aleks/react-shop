import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card border={'light'}>
                <Image src={device.img}/>
                <div className="pt-3 d-flex justify-content-between">
                    <div className="text-black-50 text-uppercase">Name</div>
                    <div>{device.rating} <span>&#9734;</span></div>
                </div>
                <div className="pt-1">{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;