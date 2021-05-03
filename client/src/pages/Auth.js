import React from 'react';
import {Button, Card, Container, Form, Row, Col} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    console.log(location)
    return (
        <Container className='d-flex justify-content-center align-items-center auth'
                   style={{height: window.innerHeight - 54}}>
            <Card>
                <h2 className="m-auto pt-1s">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-4' placeholder='Your name'/>
                    <Form.Control className='mt-3' placeholder='Your password'/>
                    <Row>
                        <Col className='d-flex justify-content-between align-items-center'>
                            {isLogin ?
                                <NavLink to={REGISTRATION_ROUTE}
                                         className="btn btn-outline-info w-50 mt-4 align-self-end"
                                >Registration
                                </NavLink>
                                :
                                <NavLink to={LOGIN_ROUTE}
                                         className="btn btn-outline-info w-50 mt-4 align-self-end"
                                >Log in
                                </NavLink>
                            }
                                <Button className="mt-4 w-50 align-self-end" variant={'outline-success'}>
                                    {isLogin ? 'Log in': 'Registration'}
                                </Button>

                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth