import React from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { fetchServiceCategory, fetchServices } from '../http/servicesAPI'
import ServiceList from '../components/ServiceList'
const Services = observer(() => {
  const {services} = useContext(Context)

  useEffect(() => {
    fetchServiceCategory().then(data => services.setServicesCategory(data))
}, [])
  useEffect(() => {
        fetchServices().then(data => {
            services.setServices(data.rows)
        })
    }, [])
  return (
    <div className="wrapper">
      <div className="services">
        <ServiceList></ServiceList>
      </div>
      <div>
      </div>
    </div>
  )
})

export default Services