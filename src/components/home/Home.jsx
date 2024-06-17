import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <span className="home-education">Front-end Developer</span>
        <h1 className="home-name">Lucy Lu</h1>
      </div>

      <div className="scroll-down-container">
        <div className="scroll-down">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
