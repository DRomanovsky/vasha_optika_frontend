import React from 'react'
import Service from './Service'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const ServicesList = observer(() => {
  const {services} = useContext(Context)

  return (
    
    <div>
    <Row className="d-flex">
        {services.servicesCategories.map(servicesCategory =>
                <Service key={servicesCategory.id} servicesCategory={servicesCategory} services={services}/>
            )}
    </Row>
  </div>
  )
})

export default ServicesList