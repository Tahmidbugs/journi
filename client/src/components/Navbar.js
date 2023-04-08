import React from "react";

export default function Navbar({ showModal, setShowModal }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid" style={{ marginTop: 20 }}>
          <h1
            style={{
              fontSize: 40,
              marginLeft: 30,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              display: "inline-block",
              borderRadius: 10,
              padding: 10,
            }}
            className="navbar-brand"
            href="/"
          >
            Journi
          </h1>
          <div></div>
          <ul
            className="navbar-nav changecolor"
            style={{
              color: "wheat",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginLeft: 120,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <li
              className="nav-item"
              style={{ fontWeight: "bold", marginLeft: 20 }}
            >
              <a href="/" className="nav-link" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li
              className="nav-item"
              style={{ fontWeight: "bold", marginLeft: 20 }}
            >
              <a
                href="/"
                style={{ textDecoration: "none", color: "white" }}
                className="nav-link"
              >
                Features
              </a>
            </li>
            <li
              className="nav-item"
              style={{ fontWeight: "bold", marginLeft: 20 }}
            >
              <a
                href="/"
                style={{ textDecoration: "none", color: "white" }}
                className="nav-link"
              >
                Contact
              </a>
            </li>
            <button
              className="buttoned"
              style={{ marginLeft: 30 }}
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          </ul>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
