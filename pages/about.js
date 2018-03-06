import React from "react";
import Layout from "../components/MyLayout";

function About() {
  return (
    <div>
      <Layout />
      <div style={{ textAlign: "center" }}>
        <p className="post__title">This is the about page</p>
      </div>
    </div>
  );
}

export default About;
