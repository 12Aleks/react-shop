import React, {useContext, useEffect, useState} from 'react';
import {Col, Form, Modal, Button, Dropdown, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    //form
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

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

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
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
                        <Dropdown.Toggle variant='secondary' className='w-100 font-weight-light text-uppercase'>
                            {device.selectedType.name || 'Selected type'} </Dropdown.Toggle>
                        <Dropdown.Menu className='w-100 text-uppercase'>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle variant='secondary' className='w-100 font-weight-light text-uppercase'>
                            {device.selectedBrand.name || 'Selected brand'}</Dropdown.Toggle>
                        <Dropdown.Menu className='w-100 text-uppercase'>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-3'
                                  placeholder='Enter device title'
                                  type='text'
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                    />
                    <Form.Control className='mt-3'
                                  placeholder='Enter device price'
                                  type='number'
                                  value={price}
                                  onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control className='mt-3' type='file'
                                  onChange={selectFile}
                    />
                    <hr/>
                    <Button variant='secondary' className='w-100 mt-3 text-uppercase font-weight-light'
                            onClick={addInfo}>Add new characteristics</Button>
                    {
                        info.map(i => (
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Enter characteristic title'
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        placeholder='Enter characteristic description'
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button variant='outline-danger'
                                            onClick={() => removeInfo(i.number)}>Delete</Button>
                                </Col>
                            </Row>
                        ))
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' className='text-uppercase font-weight-light' onClick={addDevice}>Add
                    device</Button>
                <Button variant='outline-success' className='text-uppercase font-weight-light'
                        onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;