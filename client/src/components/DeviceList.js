import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)


    return (
        <Row className="d-flex deviceList">
            {
                device.devices.map(device =>
                  <DeviceItem key={device.id} device={device} />
                )
            }
            
        </Row>
    );
});

export default DeviceList;