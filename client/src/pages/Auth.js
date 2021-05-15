import React, {useState, useContext} from 'react';
import {Button, Card, Container, Form, Row, Col} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async() => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            console.log('Auth',data)
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <Container className='d-flex justify-content-center align-items-center auth'
                   style={{height: window.innerHeight - 54}}>
            <Card>
                <h2 className="m-auto pt-1s">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-4'
                                  placeholder='Enter your email'
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control className='mt-3'
                                  placeholder='Enter your password'
                                  type='password'
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                    />
                    <Row>
                        <Col className='d-flex justify-content-between align-items-center'>
                            {isLogin ?
                                <div className='mt-4'>
                                    Do you have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                                </div>
                                :
                                <div className='mt-4'>
                                    You already have an account? <NavLink to={LOGIN_ROUTE}>Please sign in!</NavLink>
                                </div>
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