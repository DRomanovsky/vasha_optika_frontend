import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import Card from "./Card";

const DeviceList = observer(() => {
    const {goods} = useContext(Context)

    return (
        <Row className="d-flex">
            {goods.goodes.map(goods =>
                <Card key={goods.id} goods={goods}/>
            )}
        </Row>
    );
});

export default DeviceList;