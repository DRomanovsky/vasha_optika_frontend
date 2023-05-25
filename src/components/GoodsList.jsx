import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import Card from "./Card";

const GoodsList = observer(() => {
    const {goods} = useContext(Context)
    
    return (
        <Row className="d-flex">
            {goods.goodes.map(good =>
                <Card key={good.id} goods={good}/>
            )}
        </Row>
    );
});

export default GoodsList;