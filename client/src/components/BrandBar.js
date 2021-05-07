import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map( brand => (
                   <Card key={brand.id}
                         onClick={() => device.setSelectedBrand(brand)}
                         border={brand.id === device.selectedBrand.id? 'secondary': 'dark'}
                         className="modelButton pt-1 pb-1 pr-3 pl-3 m-1 text-uppercase"
                   >
                       {brand.name}
                   </Card>
                ))
            }
        </Row>
    );
});

export default BrandBar;