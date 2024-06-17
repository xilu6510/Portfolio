import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [ResultMessage, setResultMessage] = useState("");
  const [ClassNa, setClassNa] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4omjrlo",
        "template_5l1cew7",
        form.current,
        "qSwcbgC7uJf-8M7je"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setResultMessage(
              "Thank you for your message! Sent Successfully :)"
            );
            setClassNa("result-message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">- Get In Touch</h2>
      <div className="contact-container grid">
        <div className="contact-ino">
          <h3 className="contact-title">Let's talk about everything!</h3>
          <p className="contact-detail">
            Don't like forms? Send me an email!ヾ(^▽^ヾ)
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                name="user_name"
                type="text"
                className="contact-form-input"
                placeholder="Your name *"
                required
              />
            </div>
            <div className="contact-form-div">
              <input
                name="user_number"
                type="text"
                className="contact-form-input"
                placeholder="Your phone number *"
                required
              />
            </div>
          </div>
          <div className="contact-form-div">
            <input
              name="user_email"
              type="email"
              className="contact-form-input"
              placeholder="Your email address *"
              required
            />
          </div>
          <div className="contact-form-div contact-form-area">
            <textarea
              name="message"
              cols="30"
              rows="20"
              className="contact-form-input"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>

          <span className={ClassNa}>{ResultMessage}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
