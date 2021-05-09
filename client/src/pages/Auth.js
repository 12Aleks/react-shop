import React, {useState} from 'react';
import {Button, Card, Container, Form, Row, Col} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async() => {
        let user;
        if(isLogin){
            user = await login(email, password)
        }else{
            user = await registration(email, password)
        }

    }
    return (
        <Container className='d-flex justify-content-center align-items-center auth'
                   style={{height: window.innerHeight - 54}}>
            <Card>
                <h2 className="m-auto pt-1s">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-4'
                                  placeholder='Your name'
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className='mt-3'
                                  placeholder='Your password'
                                  type='password'
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                    />
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
                                <Button className="mt-4 w-50 align-self-end" variant={'outline-success'}
                                    onClick={click}>
                                    {isLogin ? 'Log in': 'Registration'}
                                </Button>

                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth