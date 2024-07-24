// src/pages/Students.js
const data={
  "sections": [
    {
      "title": "Extracurricular Activities",
      "items": [
        "Sports and Athletics",
        "Music and Dance",
        "Art and Craft",
        "Science and Technology Clubs",
        "Debate and Public Speaking"
      ]
    },
    {
      "title": "Clubs and Societies",
      "items": [
        "Robotics Club",
        "Drama Society",
        "Environmental Club",
        "Community Service Group"
      ]
    },
    {
      "title": "Student Achievements",
      "text": "Our students have excelled in various fields, winning numerous awards and accolades in academics, sports, and cultural activities."
    },
    {
      "title": "Leadership Opportunities",
      "text": "We encourage students to take up leadership roles in school councils, clubs, and societies, fostering skills such as teamwork, communication, and decision-making."
    }
  ]
}

const Students = () => {
  return (
    <div className=" mt-5 m-4 row">
      <h1 className="text-center mb-3">Student Life</h1>
      {data.sections.map((section, index) => (
        <div className="card mb-4 bg-dark text-white col-md-6 justify-content-center" key={index}>
          <div className="card-body ml-3">
            <h2 className="card-title">{section.title}</h2>
            {section.items ? (
              <ul className="list-group list-group-flush mr-3">
                {section.items.map((item, i) => (
                  <li className="list-group-item bg-dark text-white" key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="card-text">{section.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Students;
