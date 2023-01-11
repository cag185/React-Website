import React, { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // create some consts
  const form = useRef();

  const [MessengerName, setMessengerName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [error, setError] = useState(null);

  // Attempt to make my own email service before finding React's emailjs
  // const onSubmitClick = () => {
  //   //verify the name, message, and email all have values
  //   if (MessengerName !== "" && Message !== "" && Email !== "") {
  //     // construct the message to send
  //     const email_message = `From ${MessengerName}
  //                           Email: ${Email}
  //                           Message: ${Message}`;
  //     // test is
  //     console.log(email_message);
  //     // call the other function
  //     sendEmail(email_message);
  //   }
  // };

  function sendEmail(e) {
    emailjs
      .sendForm(
        "gmail_service_id",
        "template_letapzd",
        form.current,
        "rSXPS4niEgdRzjUL5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="Contact" className="InfoSection">
      <h1 className="Contact">Contact Me</h1>
      <form ref={form}>
        <div className="Text-Input">
          <h3>Name: </h3>
          <input
            type="text"
            placeholder="Enter your Name"
            className="Text-Field"
            name="name"
            onChange={(event) => setMessengerName(event.target.value)}
          ></input>
        </div>
        <div className="Text-Input">
          <h3>Email: </h3>
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="Text-Field"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="Text-Input">
          <h3>Message:</h3>
          <textarea
            placeholder="Enter your message"
            className="Text-Field-Message"
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            rows={3}
          ></textarea>
        </div>
        <div className="Col1">
          <button
            onClick={() => {
              sendEmail();
            }}
            className="Submit-Button"
            label="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
