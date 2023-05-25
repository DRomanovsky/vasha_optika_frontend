import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import {useContext} from 'react'
import {Context} from '../index'
import { observer } from 'mobx-react-lite';
const GoodsCategoryList = observer(() => {
    const {goods} = useContext(Context)
  return (
    <ListGroup>
            {goods.goodsCategories.map(good =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={good.id === goods.selectedCategory.id}
                    onClick={() => goods.setSelectedCategory(good)}
                    key={good.id}
                >
                    {good.name}
                </ListGroup.Item>
            )}
        </ListGroup>
  )
})

export default GoodsCategoryList