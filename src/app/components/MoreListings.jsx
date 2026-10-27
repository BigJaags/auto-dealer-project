
import React from 'react';

const additionalCars = [
{
id: 1,
title: 'Volkswagen Golf 2022',
price: '€24,800',
specs: '28,000 km · Petrol',
image: '/images/img9.jpg',
},
{
id: 2,
title: 'Ford 2021',
price: '€27,300',
specs: '40,000 km · Hybrid',
image: '/images/img12.jpg',
},
{
id: 3,
title: 'Tesla Model 3 2023',
price: '€44,900',
specs: '10,000 km · Electric',
image: '/images/img13.jpg',
},
];

export default function MoreListings() {
return (
<section className="more-listings">


<div className="more-car-grid">
{additionalCars.map((car) => (
<div key={car.id} className="more-car-card">
<img src={car.image} alt={car.title} /> 
<div className='more-car-info'>
<h3>{car.title}</h3>
<div className='more-car-bottom'>
  <p className='more-car-price'>
    {car.price}
  </p>
</div>
<p className='more-car-details'> {car.specs}</p>

</div>
</div>
))}
</div>
</section>
);
}
