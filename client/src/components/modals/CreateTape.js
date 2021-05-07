import React from 'react';
import {Form, Modal, Button} from "react-bootstrap";

const CreateTape = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                  <Form.Control placeholder={'Enter type title'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Add type</Button>
                <Button variant='outline-success' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTape;