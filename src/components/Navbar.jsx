
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [open, setOpen] = useState(false);

  let admin = false;
  const userData = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (userData && ["rajangel820764@gmail.com"].includes(userData.email)) {
    admin = true;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-black shadow-sm sticky-top" style={{
        backgroundColor: "#111827",
      }}>
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-3 text-white"
          to="/"
        >
          Class Notes
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          style={{
            border: "1px solid white",
            padding: "6px 10px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></span>

          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></span>

          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></span>
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            open ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 fw-semibold">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to={isLoggedIn ? "/home" : "/before-login"}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Info */}
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/info"
                onClick={() => setOpen(false)}
              >
                Info
              </Link>
            </li>

            {/* Admin */}
            {admin && (
              <li className="nav-item">
                <Link
                  className="nav-link text-danger fw-bold"
                  to="/admin"
                  onClick={() => setOpen(false)}
                >
                  Admin
                </Link>
              </li>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
}