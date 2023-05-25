import React from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { fetchServiceCategory, fetchServices } from '../http/servicesAPI'
import ServicesList from '../components/ServicesList'

const Services = observer(() => {
  const {services} = useContext(Context)

  useEffect(() => {
    fetchServiceCategory().then(data => services.setServicesCategory(data))
}, [])
  useEffect(() => {
        fetchServices().then(data => {
            services.setServices(data.rows)
        })
    }, [services.selectedCategory])
  return (
    <div className="wrapper">
      <div className="services">
        <ServicesList></ServicesList>
      </div>
    </div>
  )
})

export default Services