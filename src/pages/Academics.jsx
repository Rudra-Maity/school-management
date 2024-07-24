// src/pages/Academics.js
import 'bootstrap/dist/css/bootstrap.min.css';

const Academics = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Academics</h1>

      <div className="row bg-dark">
        <div className="col-md-6 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h2 className="card-title">Curriculum</h2>
              <h3>Primary (Grades 1-5)</h3>
              <ul className='bg-dark' style={{listStyleType:"none"}}>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
              <h3>Secondary (Grades 6-10)</h3>
              <ul style={{listStyleType:"none"}}>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
              </ul>
              <h3>Senior Secondary (Grades 11-12)</h3>
              <ul style={{listStyleType:"none"}}>
                <li>Science Stream (Physics, Chemistry, Biology/Mathematics)</li>
                <li>Commerce Stream (Business Studies, Economics, Accountancy)</li>
                <li>Arts Stream (History, Political Science, Sociology)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h2 className="card-title">Teaching Methodologies</h2>
              <p>Our teaching methodologies focus on interactive and experiential learning, encouraging students to think critically and apply knowledge in real-world contexts.</p>
              <h2 className="card-title">Educational Resources</h2>
              <p>We provide a wide range of educational resources including textbooks, digital content, and hands-on materials to support diverse learning needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
