import React, {useState} from "react";
const ServiceList = ({ services }) => {
    return (
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    );
  };
  const ServiceCard = ({ service }) => {
    return (
      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>Category: {service.category}</p>
      </div>
    );
  };
  const CategoryList = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryClick = category => {
      setSelectedCategory(category);
      onSelectCategory(category);
    };
  
    return (
      <div>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    );
  };
  const Test = () => {
    const services = [
      { id: 1, name: 'Service 1', description: 'Description 1', category: 'Category 1' },
      { id: 2, name: 'Service 2', description: 'Description 2', category: 'Category 2' },
      { id: 3, name: 'Service 3', description: 'Description 3', category: 'Category 1' },
      { id: 4, name: 'Service 4', description: 'Description 4', category: 'Category 2' },
    ];
  
    const categories = ['Category 1', 'Category 2'];
  
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    return (
      <div>
        <h2>Services</h2>
        <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
        <ServiceList services={selectedCategory ? services.filter(service => service.category === selectedCategory) : services} />
      </div>
    );
  };
  export default Test;