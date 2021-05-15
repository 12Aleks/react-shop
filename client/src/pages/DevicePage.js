import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../asets/images/star.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})

    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='device'>
            <Row>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center justify-content-center'>
                        <h2>{device.name}</h2>
                        <div className='star d-flex align-items-center justify-content-center position-relative'
                             style={{background: `url(${star}) no-repeat center center`, backgroundSize: 'contain'}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='price d-flex flex-column align-items-center justify-content-around'>
                        <h3>{device.price} zl.</h3>
                        <Button variant={'outline-dark'}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h5 className="text-uppercase" >Technical specifications:</h5>
                {device.info.map((info, index) =>
                    <Col key={info.id} className="pt-2 pb-2"
                         style={{background: index % 2 ? 'transparent' : 'lightgrey'}}>
                        {info.title} : {info.description}
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;