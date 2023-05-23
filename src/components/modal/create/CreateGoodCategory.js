import Modal from 'react-bootstrap/Modal'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { createGoodsCategory } from '../../../http/goodsAPI'
const CreateGoodCategory = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addGoodsCategory = () => {
        createGoodsCategory({name:value}).then(data => {
            setValue('')
            onHide()
        })
    }

  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcentered">
                Добавить категорию товаров
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value = {value}
                    placeholder="Название категории"
                    onChange = {e => setValue(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addGoodsCategory}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateGoodCategory