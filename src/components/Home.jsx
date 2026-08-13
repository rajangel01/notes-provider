import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div
              className="card border-0 shadow-lg overflow-hidden"
              style={{
                borderRadius: "25px",
                background: "rgba(255,255,255,.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="row g-0">
                {/* Left */}

                <div className="col-lg-6 p-5 text-white d-flex flex-column justify-content-center">
                  <h6 className="text-info fw-bold mb-3">Notes Provider</h6>

                  <h1 className="fw-bold mb-4" style={{ fontSize: "55px" }}>
                    Welcome Back
                  </h1>

                  
                  <div className="mt-5">
                    <h4 className="fw-semibold mb-2">
                      Login or Sign Up to Continue
                    </h4>

                    <p className="text-muted mb-4">
                      Login to access your notes and study materials. New here?
                      Create an account and get started.
                    </p>
                  </div>
                </div>

                {/* Right */}

                <div className="col-lg-6 bg-white d-flex align-items-center justify-content-center">
                  <div className="p-5 w-100">
                    <div className="text-center mb-5">
                      <div
                        className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-4"
                        style={{
                          width: 90,
                          height: 90,
                          fontSize: "35px",
                        }}
                      >
                        <i className="fa-solid fa-user"></i>
                      </div>

                      <h2 className="fw-bold">Authentication</h2>

                      <p className="text-muted">
                        Login or create a new account
                      </p>
                    </div>

                    <Link
                      to="/login"
                      className="btn btn-primary btn-lg w-100 mb-4 py-3 fw-bold"
                    >
                      <i className="fa-solid fa-right-to-bracket me-2"></i>
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      className="btn btn-outline-primary btn-lg w-100 py-3 fw-bold"
                    >
                      <i className="fa-solid fa-user-plus me-2"></i>
                      Create Account
                    </Link>

                    <div className="text-center mt-5">
                      <small className="text-muted">
                        By continuing you agree to our Terms & Privacy Policy
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
