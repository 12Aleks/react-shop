import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateTape from "../components/modals/CreateTape";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    return (
        <Container>
            <Row>
                <Col className='col-12 d-flex flex-column mt-3'>
                    <Button variant={'outline-dark'} className="mt-1 p-2">Add type</Button>
                    <Button variant={'outline-dark'} className="mt-3 p-2">Add brand</Button>
                    <Button variant={'outline-dark'} className="mt-3 p-2">Add device</Button>

                    <CreateBrand/>
                    <CreateTape/>
                    <CreateDevice/>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;