import React from 'react'
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {useContext} from 'react'
import {Context} from '../index'

const GoodsCategoryList = () => {
    const {goods} = useContext(Context)
    console.log(goods.selectedCategory)
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
}

export default GoodsCategoryList