import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

// import "swiper/css";

const UserHome = () => {
  const userData = JSON.parse(localStorage.getItem("isLoggedIn"));
  // const [videoUrl, setVideoUrl] = useState("");
  // const [topThree, setTopThree] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5xjvgyn",
        "template_z0p5anp",
        e.target,
        "aowNidnB2MCUU6IYE",
      )
      .then(() => {
        alert("Feedback sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  const navigate = useNavigate();

  const classNotes = () => {
    navigate("/class-notes");
    window.location.reload();
  };

   const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      {/* Welcome */}
      <div className="container-fluid mb-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="text-muted mb-1">Welcome Back </h6>
              <h3 className="fw-bold text-primary mb-0">{userData.name}</h3>
            </div>

            <span className="badge bg-primary fs-6 px-3 py-2" onClick={handleLogout}>
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-8">
            

            <h3 className="fw-semibold mt-3">
              Let's make your learning easier. 
            </h3>

            <p className="text-muted fs-5 mt-3">
              Find all your important notes and study materials in one place. No
              need to search everywhere — just choose your subject and start
              learning.
            </p>

            <p className="text-secondary">
              Stay organized, revise smarter, and keep moving forward towards
              your academic goals. Your preparation starts here!
            </p>

            <button onClick={classNotes} className="btn btn-primary px-4 mt-2">
              Start Learning →
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="card shadow border-0 rounded-4">
              <div className="card-header bg-primary text-white text-center py-4 border-0">
                <h3 className="mb-2">
                  <i className="fa-solid fa-comments me-2"></i>
                  Share Your Feedback
                </h3>
                <p className="mb-0">
                  We'd love to hear your thoughts and suggestions.
                </p>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="fa-solid fa-user me-2 text-primary"></i>
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="fa-solid fa-envelope me-2 text-primary"></i>
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="fa-solid fa-tag me-2 text-primary"></i>
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="subject"
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="fa-solid fa-message me-2 text-primary"></i>
                      Feedback
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      name="message"
                      placeholder="Write your feedback here..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg fw-bold">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer bg-light text-center py-3">
                <small className="text-muted">
                  Your feedback helps us.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
