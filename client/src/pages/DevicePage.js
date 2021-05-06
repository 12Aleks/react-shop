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

    const description = [
        {id: 1, title: 'RAM', description: '5 GB'},
        {id: 2, title: 'Camera', description: '12 Pro'},
        {id: 3, title: 'Processor', description: 'IP Pro'},
        {id: 4, title: 'Cors', description: '2'},
        {id: 5, title: 'Battery', description: '4000'},
    ]
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
                {description.map((info, index) =>
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