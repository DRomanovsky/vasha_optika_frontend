import { Button, Dropdown, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {useContext, useState, useEffect} from 'react'
import {Context} from '../../../index'
import { createGoods, fetchGoodsCategory } from '../../../http/goodsAPI'
import { observer } from 'mobx-react-lite'

const CreateGood = observer(({show, onHide}) => {
    const {goods} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    
    const addGood = () => {
        const formData = new FormData()
        formData.append ('name', name)
        formData.append ('price', `${price}`)
        formData.append ('image', file)
        formData.append ('description', description)
        formData.append ('goodsCategoryId', goods.selectedCategory.id)
        createGoods(formData).then(data => onHide())
    }
    const selectFile = e => {
        setFile(e.target.files[0])
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
                Добавить товар
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Control
                value={name}
                className="mt-3"
                onChange={e => setName(e.target.value)}
                placeholder="Ведите название" 
                required
            />  
            <Form.Control   
                value={price}
                className="mt-3"
                onChange={e => setPrice(Number(e.target.value))}
                placeholder="Введите цену"
                required
            />
            <Form.Control   
                value={description}
                className="mt-3"
                onChange={e => setDescription(e.target.value)}
                placeholder="Введите описание"
                required
            />
            <Form.Control
                className="mt-3" 
                type="file"
                onChange={selectFile}
                required
            />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addGood}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  )
})

export default CreateGood