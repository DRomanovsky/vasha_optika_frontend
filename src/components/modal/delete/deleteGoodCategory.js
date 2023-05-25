import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Form } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import { Context } from '../../../index'
import { deleteOneGoodsCategory, fetchGoodsCategory } from '../../../http/goodsAPI'

const DeleteGoodsCategory = ({show, onHide}) => {
    const {goods} = useContext(Context)
    const delOneGoodsCategory = () => {
        deleteOneGoodsCategory(goods.selectedCategory.id).then(() => {onHide()})
    }
    useEffect(() => {
        fetchGoodsCategory().then(data => goods.setGoodsCategory(data))
    })
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcentered">
                Удалить категорию услуг
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>
                        {goods.selectedCategory.name || "Выберите категорию"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                                {goods.goodsCategories.map(goodsCategory =>
                                    <Dropdown.Item
                                        onClick={() => goods.setSelectedCategory(goodsCategory)}
                                        key={goodsCategory.id}
                                    >
                                        {goodsCategory.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                </Dropdown>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={delOneGoodsCategory}>Удалить</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteGoodsCategory