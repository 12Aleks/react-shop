import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav, NavLink, Button, Container} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

//dobawlaem nabludenie MOBX za navbar w realnom wremeni (dobawlaem observer i oboracziwaem wso w ())
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
             <Container>
                 <NavLink className='app-name' to={SHOP_ROUTE}>DeviceShop :)</NavLink>
                 {user._isAuth?
                     <Nav className="ml-auto">
                         <Button variant={'outline-light'} className='mr-2'>Admin panel</Button>
                         <Button variant={'outline-light'}>Log in</Button>
                     </Nav>
                     :
                     <Nav className="ml-auto">
                         <Button variant={'outline-light'} onClick={() => user.setIsAuth(true) }>Authorization</Button>
                     </Nav>
                 }
             </Container>
        </Navbar>
    );
});

export default NavBar;