import React from 'react';
import cars from '../data/cars';

export default function CarList() {
return (
<section className="cars-section" id="cars">

<h2>Featured Vehicle Listings and Top Deals</h2>

<p className="cars-intro">
Discover hand-picked vehicles offering the best value and performance.
</p>

<div className="car-grid">

{cars.map((car) => (
<div className="car-card" key={car.id}>

<img src={car.image} alt={car.name} />

<div className="car-info">
<h3>{car.name}</h3>
<div className="car-bottom">
<p className="car-price">
{car.price}
</p>
</div>
<p className="car-details">
{car.details}
</p>
</div>
</div>
))}
</div>
</section>
);
}