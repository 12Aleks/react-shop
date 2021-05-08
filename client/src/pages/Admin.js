import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateTape from "../components/modals/CreateTape";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)


    return (
        <Container>
            <Row>
                <Col className='col-12 d-flex flex-column mt-3'>
                    <Button variant={'outline-dark'} className="mt-1 p-2 text-uppercase" onClick={() => setTypeVisible(true)}>Add type</Button>
                    <Button variant={'outline-dark'} className="mt-3 p-2 text-uppercase" onClick={() => setBrandVisible(true)}>Add brand</Button>
                    <Button variant={'outline-dark'} className="mt-3 p-2 text-uppercase" onClick={() => setDeviceVisible(true)}>Add device</Button>

                    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                    <CreateTape show={typeVisible} onHide={() => setTypeVisible(false)}/>
                    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;