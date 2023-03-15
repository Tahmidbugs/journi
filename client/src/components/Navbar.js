import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid" style={{ marginTop: 20 }}>
          <h1
            style={{ fontSize: 40, marginLeft: 30 }}
            class="navbar-brand"
            href="/"
          >
            Journi
          </h1>
          <div></div>
          <ul class="navbar-nav changecolor" style={{ color: "wheat" }}>
            <li class="nav-item" style={{ fontWeight: "bold", marginLeft: 20 }}>
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item" style={{ fontWeight: "bold", marginLeft: 20 }}>
              <a href="/" style={{ textDecoration: "none" }} class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item" style={{ fontWeight: "bold", marginLeft: 20 }}>
              <a href="/" style={{ textDecoration: "none" }} class="nav-link">
                Contact
              </a>
            </li>
            <button class="buttoned" style={{ marginLeft: 30 }}>
              Login
            </button>
          </ul>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
