import { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Tabs, Tab, Row } from 'react-bootstrap';
import { fetchServiceCategory, fetchServices} from '../http/servicesAPI'
import { observer } from 'mobx-react-lite';

const ServiceList = observer(() => {
  const {services} = useContext(Context)
  useEffect(() => {
    fetchServiceCategory().then(data => services.setServicesCategory(data))
}, [])
  return (
    <div>
      <Tabs justify fill type="pills">
         {services.servicesCategories.map((category) => (
          <Tab key={category.id} eventKey={category.id} title={category.name} tabClassName="tabsService">
            <h2 className="mt-5">{category.name}</h2>
            <Row className="mt-4 d-flex align-items-center .justify-content-xxl-evenly h2 p-3 gap-4">{services.services
              .filter((service) => service.servicesCategoryId === category.id)
              .map((service) => (
                <div key={service.id} className="serviceCard d-flex flex-column justify-content-between">
                  <h3 className="text-capitalize text-center ">{service.name}</h3>
                  <p className="text-center ">{service.price + ' руб.'}</p>
                </div>
              ))}
              </Row>
          </Tab>
        ))} 
      </Tabs>
    </div>
  );
});
export default ServiceList;