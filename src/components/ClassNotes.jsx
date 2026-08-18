import React from "react";

const ClassNotes = () => {
  const htmlNotes = [
    {
      day: "01",
      title: "HTML Day 1",
      description: "Introduction & Basic HTML Concepts",
      link: "https://drive.google.com/file/d/1pVbVr2zTDkThYY7CdnUi3obkNbh8RBbn/view?usp=drive_link",
    },
    {
      day: "02",
      title: "HTML Day 2",
      description: "Some Basic HTML Tags",
      link: "https://drive.google.com/file/d/1mM8BX63jRiICE2vCw97hBTJHsxqEwRrh/view?usp=drive_link",
    },
    {
      day: "03",
      title: "HTML Day 3",
      description: "Links and Image Tag",
      link: "https://drive.google.com/file/d/1zzNTKSAaH7Ruz6ggjziWDtIAsJATV4Q-/view?usp=drive_link",
    },
    {
      day: "04",
      title: "HTML Day 4",
      description: "Lists and It's Attributes",
      link: "https://drive.google.com/file/d/13dR0l9vmDZE2UJln4dWMsjKC-uhywvz8/view?usp=sharing",
    },
    {
      day: "05",
      title: "HTML Day 5",
      description: "Semantic Tag",
      link: "https://drive.google.com/file/d/1wFsZCasD5-z8o1W_XJDcbQ63ssa5yU5W/view?usp=sharing",
    },
  ];

  const pythonNotes = [
    {
      day: "01",
      title: "Keywords",
      description: "All 35 Keywords in Python",
      link: "https://drive.google.com/file/d/16MSSs-Qwlo4u9N6-LoBFlBDMi76jNKiM/view?usp=sharing",
    },
    {
      day: "02",
      title: "range() Function",
      description: "range() - a built in function in python",
      link: "https://drive.google.com/file/d/1VuNk1g8qPBf3y6gywZ315hGCx6_acIl6/view?usp=sharing",
    },
    {
      day: "03",
      title: "Operators",
      description: "Operators and its types in Python",
      link: "https://drive.google.com/file/d/1CtNHfauuDf7875lNTk1ntsJ873pdKUa7/view?usp=sharing",
    },
    {
      day: "04",
      title: "if elif and else",
      description: "Use of if-elif-else",
      link: "https://drive.google.com/file/d/1rEx0SThbtaiVK3rYobHl4T581gH24Vvj/view?usp=sharing",
    },
    {
      day:"05",
      title:"if-else Questions",
      description:"Practice Questions based on if else",
      link:"https://drive.google.com/file/d/1l78ritQJ9vQEBPJKdr0S7UdxlGbGf2OJ/view?usp=sharing"
    },
    {
      day: "06",
      title:"Loops in Python", 
      description:"Loops and its types in Python",
      link:"https://drive.google.com/file/d/1zmpm0ufC5EHD73BcW81mwKlQDuwkJ3Ft/view?usp=sharing",
    },
    {
      day: "07",
      title: "Loop Practice Questions",
      description: "Practice Questions Based on Loops",
      link: "https://drive.google.com/file/d/1L4ccojetE730i2hpJooVIWQ-d0OyPYZa/view?usp=sharing",
    },
    {
      day: "08", 
      title:"Python Lists",
      description:"Python Lists Complete Notes",
      link:"https://drive.google.com/file/d/1ECmDSGhCwWnfMl3ocYuWGSJ-eTFVC7yH/view?usp=sharing"
    },
    {
      day:"09",
      title:"Tuples in Python",
      description:"Python Tuples in Detail",
      link:"https://drive.google.com/file/d/1NIA1wVDZMAnAbtNWZH5rbvHSXZ3cGcJW/view?usp=sharing"
    },
    {
      day:"10",
      title:"Sets in Python",
      description:"Python Sets in Detail",
      link:"https://drive.google.com/file/d/12geOPBY8e9C8xwdMMTbcNOl-rj75Pv95/view?usp=sharing"
    },
    {
      day:"11",
      title:"Functions in Python",
      description:"Python Functions in Detail",
      link:"https://drive.google.com/file/d/12YteA47HKjiIetAZCDjbaD_hLXLw3jHI/view?usp=sharing"
    }
  ];

  const NoteSection = ({ title, description, badge, badgeClass, notes }) => (
    <section className="mb-5">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">{title}</h2>
        <p className="text-muted mb-0">{description}</p>
      </div>

      {/* Notes Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        {notes.map((note, index) => (
          <div
            key={note.day}
            className={`p-3 p-md-4 ${
              index !== notes.length - 1 ? "border-bottom" : ""
            }`}
          >
            <div className="row align-items-center g-3">

              {/* Day */}
              <div className="col-2 col-md-1">
                <div
                  className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-secondary"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  {note.day}
                </div>
              </div>

              {/* Technology */}
              <div className="col-10 col-md-2">
                <span
                  className={`badge rounded-pill ${badgeClass} px-3 py-2`}
                >
                  {badge}
                </span>
              </div>

              {/* Topic */}
              <div className="col-12 col-md-6">
                <h5 className="fw-bold text-dark mb-1">
                  {note.title}
                </h5>

                <small className="text-muted">
                  {note.description}
                </small>
              </div>

              {/* Button */}
              <div className="col-12 col-md-3 text-md-end">
                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  <i className="fa-solid fa-file-pdf me-2"></i>
                  View PDF
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="container-fluid my-5 px-3 px-md-5">

      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-2">
          Class Notes
        </h1>

        <p className="text-muted mb-0">
          Access all class notes and study materials
        </p>
      </div>

      {/* HTML */}
      <NoteSection
        title="HTML Class Notes"
        description="Learn HTML from basic concepts to advanced topics."
        badge="HTML"
        badgeClass="bg-warning text-dark"
        notes={htmlNotes}
      />

      {/* Python */}
      <NoteSection
        title="Python Class Notes"
        description="Learn Python concepts with notes and practice questions."
        badge="Python"
        badgeClass="bg-info text-dark"
        notes={pythonNotes}
      />

    </div>
  );
};

export default ClassNotes;