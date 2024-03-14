import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Elite,a poignant exploration of solitude, delves into the depths of the human experience. It's a state where introspection flourishes, and self-discovery takes root. Embracing solitude isn't about loneliness, but rather a profound journey of self-awareness and growth. In solitude, we find solace, clarity, and the opportunity to connect with our innermost thoughts and emotions. It's a time for reflection, creativity, and renewal—a sanctuary where we learn to appreciate our own company and nurture our souls. Through solitude, we discover the strength within ourselves, forging a deeper understanding of who we are and what truly matters in life.
            </p>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
