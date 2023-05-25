import { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Tabs, Tab } from 'react-bootstrap';
import { fetchServiceCategory} from '../http/servicesAPI'
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
            <h2>{category.name}</h2>
            {services.services
              .filter((service) => service.servicesCategoryId === category.id)
              .map((service) => (
                <div key={service.id}>
                  <h3>{service.name}</h3>
                  <p>{service.price}</p>
                </div>
              ))}
          </Tab>
        ))} 
      </Tabs>
    </div>
  );
});
export default ServiceList;