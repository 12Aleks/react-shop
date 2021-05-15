import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav, NavLink, Button, Container} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'


//dobawlaem nabludenie MOBX za navbar w realnom wremeni (dobawlaem observer i oboracziwaem wso w ())
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory();

    const logOut = () => {
         user.setUser({})
         user.setIsAuth(false)
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className='app-name' onClick={() => history.push(SHOP_ROUTE)}>DeviceShop</NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} className='mr-2' onClick={() => history.push(ADMIN_ROUTE)}>Admin
                            panel</Button>
                        <Button variant={'outline-light'} onClick={() => logOut()}>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;