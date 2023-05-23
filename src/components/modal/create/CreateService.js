import { Button, Dropdown, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {useContext, useState, useEffect} from 'react'
import {Context} from '../../../index'
import { createServices, fetchServiceCategory } from '../../../http/servicesAPI'
import { observer } from 'mobx-react-lite'

const CreateService = observer(({show, onHide}) => {
    const {services} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const addService = () => {
        const formData = new FormData()
        formData.append ('name', name)
        formData.append ('price', `${price}`)
        formData.append ('servicesCategoryId', services.selectedCategory.id)
        createServices(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchServiceCategory().then(data => services.setServicesCategory(data))
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
                    {services.selectedCategory.name || "Выберите категорию"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                            {services.servicesCategories.map(servicesCategory =>
                                <Dropdown.Item
                                    onClick={() => services.setSelectedCategory(servicesCategory)}
                                    key={servicesCategory.id}
                                >
                                    {servicesCategory.name}
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
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addService}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  )
})

export default CreateService