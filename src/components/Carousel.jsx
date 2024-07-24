// src/components/Carousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/891974840/photo/messing-around-at-athletics-club.jpg?s=612x612&w=0&k=20&c=JYJxVSw_pW6cQvkRMt7D8RtVc4tSMxY4tPdEmzXCeFg="
          alt="Annual Sports Day"
        />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://media.istockphoto.com/id/1205575649/photo/science-photo.jpg?s=612x612&w=0&k=20&c=OxMmV9tepPKhreuEprSZvqay2MM8trsacuU32aKZaaA="
          alt="Science Exhibition"
        />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1092924028/photo/colorful-painted-hands-in-front-of-a-spring-scene.jpg?s=612x612&w=0&k=20&c=LrhJE0da4os0hnOt01RonDUqBAg-6jzqo2ACTdw-R_o="
          alt="Cultural Fest"
        />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
