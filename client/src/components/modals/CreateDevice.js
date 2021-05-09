import React, {useContext, useState} from 'react';
import {Col, Form, Modal, Button, Dropdown, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {
            title: '',
            description: '',
            number: Date.now()
        }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(info => info.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"
                             className='text-uppercase text-black-50 font-weight-light'>
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3' variant='secondary'>
                        <Dropdown.Toggle variant='secondary' className='w-100 font-weight-light text-uppercase'>Select
                            type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                device.types.map(type => (
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle variant='secondary' className='w-100 font-weight-light text-uppercase'>Select
                            brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                device.brands.map(brand => (
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-3' placeholder='Enter device title' type='text'/>
                    <Form.Control className='mt-3' placeholder='Enter device price' type='number'/>
                    <Form.Control className='mt-3' type='file'/>
                    <hr/>
                    <Button variant='secondary' className='w-100 mt-3 text-uppercase font-weight-light'
                            onClick={addInfo}>Add new characteristics</Button>
                    {
                        info.map(i => (
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Enter characteristic title'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Enter characteristic description'
                                    />
                                </Col>
                                <Col md={4}>
                                   <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Delete</Button>
                                </Col>
                            </Row>
                        ))
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' className='text-uppercase font-weight-light' onClick={onHide}>Add
                    device</Button>
                <Button variant='outline-success' className='text-uppercase font-weight-light'
                        onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;