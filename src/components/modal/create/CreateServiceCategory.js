import Modal from 'react-bootstrap/Modal'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { createServiceCategory } from '../../../http/servicesAPI'
const CreateServiceCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addServicesCategory = () => {
        createServiceCategory({name:value}).then(() => {
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
                Добавить категорию услуг
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
            <Button variant="outline-success" onClick={addServicesCategory}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateServiceCategory