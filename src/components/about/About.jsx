import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">- About Me</h2>
      {/* <p className="des">(let me introduce myself to you (ﾟ▽ﾟ)/)</p> */}
      <div class="letter-container">
        <p className="cover-letter">Hi,</p>
        <p className="cover-letter">
          I am writing to express my strong interest in the Front-end Developer
          position. With a Master of Information Technology in Computer Science
          from the University of Sydney, I bring a solid educational foundation
          and around 3 years of experience in front-end web development.
          Throughout my career, while my previous experience primarily involves
          creating websites using Wordpress, I have honed my skills in
          developing cutting-edge front-end web applications, with a strong
          focus on JavaScript, HTML, and CSS. I am proficient in leading
          libraries and framework such as React, jQuery, Bootstrap. My
          experience in these technologies has allowed me to create efficient
          and user-friendly web interfaces that meet the highest industry
          standards.
        </p>
        <p className="cover-letter">
          One of my strengths lies in problem-solving and innovative thinking
          when it comes to web-based system design. I have a track record of
          successfully overcoming complex technical challenges and creating
          elegant solutions. Additionally, I have hands-on experience in the
          development of no-code, low-code, and full-stack platforms, such as
          Wix, Webflow and Shopify.
        </p>
        <p className="cover-letter">
          What sets me apart is my agile mindset, quick learning ability, and
          self-motivation. I take great pride in ownership of my work and am
          known for my creative problem-solving skills. I am passionate about
          software development and am dedicated to crafting exceptional mobile
          and web applications that delight users.
        </p>
        <p className="cover-letter">
          I am comfortable working independently and have a proven ability to
          conduct in-depth research to solve complex technical problems.
          Moreover, I am a team player with excellent collaboration skills, and
          I thrive in fast-paced, culturally diverse, and globally distributed
          team environments.
        </p>
        <p className="cover-letter">
          Thank you for your valuable time and attention in reviewing this
          letter thus far.
        </p>
        <p>Kind Regards,</p>
        <p>Lucy</p>
      </div>
    </section>
  );
};

export default About;
