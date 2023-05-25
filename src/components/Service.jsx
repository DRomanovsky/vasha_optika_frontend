import React from 'react'
import ServiceCard from './ServiceCard'
import { useEffect} from 'react'
import {fetchOneServiceCategory, fetchServices } from '../http/servicesAPI'

const Service = ({servicesCategory, services}) => {
  return (
    <div className="servic">
      <div className="serviceName">
        {servicesCategory.name}
      </div>
      <div> 
        {services.services
              .filter((service) => servicesCategory.id === servicesCategory.id)
              .map((service) =>
                <ServiceCard key={service.id} service={service}/>
            )}
      </div>
          
  </div>
  )
}

export default Service