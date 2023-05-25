import { Button, Dropdown, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {useContext, useEffect} from 'react'
import {Context} from '../../../index'
import { deleteOneGoods, fetchGoods } from '../../../http/goodsAPI'
import { observer } from 'mobx-react-lite'

const DeleteGood =observer(({show, onHide}) => {
    const {goods} = useContext(Context)
    const delGood = () => {
        deleteOneGoods(goods.selectedGood.id).then(() => {onHide()})
    }

    useEffect(() => {
        fetchGoods(null, null, null).then(data => goods.setGoods(data))
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
                Удалить товар
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown>
                <Dropdown.Toggle>
                    {goods.selectedGood.name || "Выберите товар"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                            {goods.goodes.map(good =>
                                <Dropdown.Item
                                    onClick={() => goods.setSelectedGood(good)}
                                    key={good.id}
                                >
                                    {good.id} - {good.name} | Категория - {good.goodsCategoryId}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
            </Dropdown>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={delGood}>Удалить</Button>
        </Modal.Footer>
    </Modal>
  )
})

export default DeleteGood