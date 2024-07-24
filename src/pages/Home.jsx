// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import CarouselComponent from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Banner />
      <CarouselComponent />
      <footer className="bg-dark text-white mt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about-us" className="text-primary">About Us</a></li>
                <li><a href="/academics" className="text-primary">Academics</a></li>
                <li><a href="/admissions" className="text-primary">Admissions</a></li>
                <li><a href="/faculty" className="text-primary">Faculty</a></li>
                <li><a href="/students" className="text-primary">Students</a></li>
                <li><a href="/gallery" className="text-primary">Gallery</a></li>
                <li><a href="/contact-us" className="text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Information</h5>
              <address>
                <p>Springdale Public School</p>
                <p>123 Education Lane</p>
                <p>Cityville, State, ZIP Code</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: <a href="mailto:info@springdale.edu" className="text-white">info@springdale.edu</a></p>
              </address>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled"  >
                <li><a href="https://facebook.com" className="text-primary">Facebook</a></li>
                <li><a href="https://twitter.com" className="text-primary">Twitter</a></li>
                <li><a href="https://instagram.com" className="text-primary">Instagram</a></li>
                <li><a href="https://linkedin.com" className="text-primary">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
       
      </footer>
    </div>
  );
};

export default Home;
