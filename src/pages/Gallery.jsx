// src/pages/Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div className="container mt-5">
      <h1>Gallery</h1>
      <div className="row">
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/891974840/photo/messing-around-at-athletics-club.jpg?s=612x612&w=0&k=20&c=JYJxVSw_pW6cQvkRMt7D8RtVc4tSMxY4tPdEmzXCeFg=" alt="Sports Day" className="img-fluid rounded" />
          <p>Annual Sports Day</p>
        </div>
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/1205575649/photo/science-photo.jpg?s=612x612&w=0&k=20&c=OxMmV9tepPKhreuEprSZvqay2MM8trsacuU32aKZaaA=" alt="Science Exhibition" className="img-fluid rounded" />
          <p>Science Exhibition</p>
        </div>
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/1092924028/photo/colorful-painted-hands-in-front-of-a-spring-scene.jpg?s=612x612&w=0&k=20&c=LrhJE0da4os0hnOt01RonDUqBAg-6jzqo2ACTdw-R_o=" className="img-fluid rounded" />
          <p>Cultural Fest</p>
        </div>
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/1366797961/photo/interior-views-of-an-empty-japanese-style-classroom.webp?s=612x612&w=is&k=20&c=4fXuWEwk6Eiy6UmqJ0MUARyj9jQ0KCBOzztZfzJXOwY=" alt="Classroom" className="img-fluid rounded" />
          <p>Interactive Classroom</p>
        </div>
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/1193273154/photo/empty-wooden-tables-in-public-library.jpg?s=612x612&w=0&k=20&c=XdP9LgQCNgJxu9pBBfj5mK4dTlYHA7nbi_lGJY37i84=" alt="Library" className="img-fluid rounded" />
          <p>School Library</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
