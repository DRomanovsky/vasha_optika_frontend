import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Form } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import { Context } from '../../../index'
import { deleteOneServiceCategory, fetchServiceCategory } from '../../../http/servicesAPI'

const DeleteServiceCategory = ({show, onHide}) => {
    const {services} = useContext(Context)
    
    const delOneServicesCategory = () => {
        deleteOneServiceCategory(services.selectedCategory.id).then(() => {
            onHide()
        })
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
                Удалить категорию услуг
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
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
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={delOneServicesCategory}>Удалить</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteServiceCategory