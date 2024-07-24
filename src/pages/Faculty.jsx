// src/pages/Faculty.js

const Faculty = () => {
  return (
    <div className="container mt-5 justify-content-center text-center">
      <h1>Faculty</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <h3>Dr. John Doe</h3>
          <p>Principal</p>
          <p>Ph.D. in Education, 20 years of experience</p>
        </div>
        <div className="col-md-4">
          <h3>Ms. Jane Smith</h3>
          <p>Vice Principal</p>
          <p>M.A. in English Literature, 15 years of experience</p>
        </div>
        <div className="col-md-4">
          <h3>Mr. Richard Roe</h3>
          <p>Head of Science Department</p>
          <p>M.Sc. in Physics, 10 years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
