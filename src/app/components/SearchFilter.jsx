'use client';

import React from "react";

export default function SearchFilter() {
return (
<section className="search-section">
<h2>Search Inventory</h2>

<div className="search-form">
  <div>
    <label>Conditions</label>
    <select>
      <option>All</option>
      <option>New</option>
      <option>Used</option>
      <option>Tokumbo</option>
    </select>
  </div>
  <div>
    <label>Price Range</label>
    <select>
      <option>All Prices</option>
      <option>$0 - $10,000</option>
      <option>$10,000 - $20,000</option>
      <option>$20,000+</option>
    </select>
  </div>

  <div>
    <label>Brand</label>
    <select>
      <option>All Brands</option>
      <option>Toyota</option>
      <option>Honda</option>
      <option> Ford</option>
    </select>
  </div>

  <div>
    <label>Body Type</label>
    <select>
      <option>All Types</option>
      <option>Sedan</option>
      <option> SUV</option>
      <option>Truck</option>
    </select>
  </div>

  <button>Submit</button>
</div>
</section>
);
}