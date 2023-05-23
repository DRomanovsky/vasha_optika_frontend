import React from 'react'
import ServiceCard from './ServiceCard'
import { useEffect } from 'react'
import {fetchServiceCategory } from '../http/servicesAPI'

const Service = ({servicesCategory, services}) => {
    useEffect(() => {
      fetchServiceCategory(servicesCategory.id).then(data => services.setServicesCategory(data))
  }, [])
  return (
    <div class="servic">
      <div class="serviceName">
        {servicesCategory.name}
          {services.services.map(service =>
            <ServiceCard key={service.id} service={service}/>
          )}
      </div>
  </div>
  )
}

export default Service