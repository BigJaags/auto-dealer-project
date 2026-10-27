import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-text">
        <p className='about-lebel'>ABOUT US</p>
        <h2>Reliable Auto Dealer with Customer Focus</h2>
        <p>
          PrimeAuto Hub is your trusted partner for all things automotive. With years of experience in the industry, we are committed to providing exceptional service and quality vehicles to our customers.
        </p>

        <ul>
          <li>Quality and inspected vehicles</li>
          <li>Transparent pricing with no hidden fees</li>
          <li>Flexible financing and leasing options</li>
          <li>Dedicated support from first inquiry to final purchase</li>
        </ul>
        <p>Our goal is to exceed customer expectations and build long-term relationships based on trust and satisfaction.</p>
        <a href="#contact" className='about-button'>
        learn More
      </a>
      </div>
      

      <div className="about-image">
        <img src="/images/about-us.jpg" alt="About PrimeAuto Hub" />
      </div>
    </section>
  );
}

