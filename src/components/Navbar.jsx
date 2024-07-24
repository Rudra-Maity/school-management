// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ position: 'sticky', top: 0, zIndex: 1000, width: "100vw" ,backgroundColor:"GrayText"}}>
      <Link className="navbar-brand" to="/">
        <img className="rounded-circle" src="https://as2.ftcdn.net/v2/jpg/07/22/06/11/1000_F_722061137_0VXLWXJJlBSWIEvKjMoVstcILLCF6SoR.jpg" alt="School Logo" width="80" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/academics">Academics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admissions">Admissions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculty">Faculty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
