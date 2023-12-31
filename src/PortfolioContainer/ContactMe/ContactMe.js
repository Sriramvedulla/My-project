import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k099rln",
        "template_31evx4v",
        form.current,
        "z3JTxCCt_9EglO0Kt"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-me">
      <div className="container border">
        <h1 className="contact">Contact Form</h1>
        <form className="row" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="form-control"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="form-control"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            className="form-control"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary send-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
