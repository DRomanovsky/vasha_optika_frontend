import { Button, Dropdown} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {useContext, useEffect} from 'react'
import {Context} from '../../../index'
import { deleteOneService, fetchServices } from '../../../http/servicesAPI'
import { observer } from 'mobx-react-lite'

const DeleteService = observer(({show, onHide}) => {
    const {services} = useContext(Context)

    const delService = () => {
        deleteOneService(services.selectedService.id).then(() => {
            onHide()
        })
    }
    // useEffect(() => {
    //     fetchServices().then(data => {services.setServices(data)})
    // })

    console.log(services)
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcentered">
                Удалить услугу
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown>
                <Dropdown.Toggle>
                    {services.selectedService.name || "Выберите услугу"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                            {/* {services.services.map(service => (
                                <Dropdown.Item
                                    onClick={() => services.setSelectedService(service)}
                                    key={service.id}
                                >
                                    {service.id} - {service.name} | Категория - {service.servicesCategoryId}
                                </Dropdown.Item>
                            ))} */}
                        </Dropdown.Menu>
            </Dropdown>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={delService}>Удалить</Button>
        </Modal.Footer>
    </Modal>
  )
})

export default DeleteService