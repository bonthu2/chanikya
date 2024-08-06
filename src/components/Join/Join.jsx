import "./Join.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };



  return (
    <div className="Join" id="join-up">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ELEVATE YOUR</span>
          <span> OUTDOOR SPACES</span>
        </div>
        <div>
          <span>WITH OUR</span>
          <span className="stroke-text"> CEMENT PRODUCTS</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Contact Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
