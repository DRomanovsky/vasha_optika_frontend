import React from 'react'
import Service from './Service'
import { useContext, useEffect } from 'react'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import { fetchServiceCategory, fetchServices } from '../http/servicesAPI'
const ServicesList = () => {
  const {services} = useContext(Context)
  
  return (
    
    <div>
    <Row class="d-flex">
        {services.servicesCategories.map(servicesCategory =>
                <Service key={servicesCategory.id} servicesCategory={servicesCategory} services={services}/>
            )}
    </Row>
  </div>
  )
}

export default ServicesList