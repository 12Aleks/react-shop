import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup>
            {device.types.map(type =>(
                <ListGroup.Item
                    active={device.selectedType.id? type.id === device.selectedType.id : type.id === 1}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});

export default TypeBar;