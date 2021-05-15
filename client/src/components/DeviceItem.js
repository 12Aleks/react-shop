import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    let history = useHistory();
    // console.log(history)
    return (
        <Col md={3}>
            <Card border={'light'} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image src={process.env.REACT_APP_URL + device.img}/>
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