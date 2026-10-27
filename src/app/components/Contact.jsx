import React from 'react';

export default function Contact() {
return (
<section className="contact-section" id="contact">
  <div className="contact-content">
    <p className='contact-lebel'>GET IN TOUCH</p>
    <h2>Contact Us</h2>
    <p>Have questions or need assistance? Reach out to us!</p>
    <p className='contact-text'>Contact us today or book a test drive with one of our vehicles. </p>

   <div className="contact-info">
    <p><strong>PrimeAuto Hub</strong></p>
    <p>11 GRA area Ijebu-Ode, Ogun State</p>
    <p>Phone: +234 1 234 5678</p>
    <p><strong>Email:</strong> info@primeautohub.com</p>
   </div>

   <div className='hero-buttons'>
    <a href="#cars" className='hero-button red-button'>
    Book a Test Drive
   </a>
   <a href="#cars" className='hero-button white-button'>
    Request Information
   </a>
   
   </div>

  
   {/*
   <button>Book a Test Drive</button>
   <button>Request Information</button>
   */}
  </div>
</section>
);
}

