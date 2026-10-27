import { Car, Truck, TruckElectric, Van } from 'lucide-react';
import React from 'react';

const serviceIcons = [
  {
    title:"SUV",
    discription:"We offer flexible financing solutions to help you get the car you want.",
    icon: Van
  },
  {
    title:"Sedan",
    discription:"We provide a wide range of services to keep your vehicle in top condition.",
    icon: Car
  },
  {
    title:"Truck",
    discription:"Our team of experts is here to assist you with any questions or concerns.",
    icon:Truck
  },
  {
    title:"Electric",
    discription:"Experience the perfect blend of style and performance with our electric vehicle options.",
    icon: TruckElectric
  }
]
export default function Services() {
  return (
    <section className="services-section">
      <div className = 'services-content'>
        
      <h2>Explore Our Services</h2>

      <p className='service-intro'>
        Find the right vehicle for your lifestyle and needs
      </p>
      <div className="services-grid">
      
            {serviceIcons.map((iconDetails, index) => {
              const Icon = iconDetails.icon;

              return (
                <div className='services-card' key={index}>
                  <p className='serviceCar-icon'>
                    <Icon />
                  </p>
                  <h3>{iconDetails.title}</h3>
                  <p>{iconDetails.discription}</p>
                </div>
              );
            })}
      </div>
      </div>
    </section>
  );
}
  
