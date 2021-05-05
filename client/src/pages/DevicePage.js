import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../asets/images/star.png'

const DevicePage = () => {
    const device = {
        id: 5,
        name: 'IPhone 6',
        price: 3000,
        rating: 4,
        img: 'https://www.mediaexpert.pl/media/cache/gallery/product/2/202/913/613/en4wyuzf/images/20/2008325/Smartfon-APPLE-iPhone-11-Pro-Max-512GB-Space-Gray-tyl-front.jpg'
    }
    return (
        <Container className='device'>
            <Row>
                <Col md={4}>
                    <Image src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center justify-content-center'>
                        <h2>{device.name}</h2>
                        <div className='star d-flex align-items-center justify-content-center position-relative'
                             style={{background: `url(${star}) no-repeat center center`, backgroundSize: 'cover'}}
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
        </Container>
    );
};

export default DevicePage;