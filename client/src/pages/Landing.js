import React from "react";
import Searchbox from "../components/Landing/Searchbox";
import Navbar from "../components/Navbar";

function Landing(props) {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />

      <div style={{ display: "flex", margin: "auto", marginTop: "10%" }}>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            margin: "auto",
            marginLeft: 40,
          }}
        >
          <h1>
            Plan your journey
            <br /> with JOURNI
          </h1>
          <h3>
            Make every trip count. Use JOURNI to pick
            <br /> your destination and create lasting memories!
          </h3>
        </div>
        <div style={{ width: "50%", paddingLeft: 60 }}>
          <Searchbox />
        </div>
      </div>
    </div>
  );
}

export default Landing;
