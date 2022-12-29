import React from "react";
import { TextField } from "@material-ui/core";

// class Contact extends Contact {
//   constructor(props) {
//     super(props);
//     this.onSubmitClick = this.onSubmitClick.bind(this);
//   }

const onSubmitClick = (props) => {
  //verify the name, message, and email all have values
  if (props.Name !== null && props.Message !== null && props.Email !== null) {
    // construct the message to send
    const email_message = `From ${props.Name} 
        Email: ${props.Email}
        Message: ${props.Message}`;

    // test is
    console.log(email_message);
  }
  return 0;
};

export default function Contact(props) {
  //   render(props) {
  return (
    <div id="Contact" className="InfoSection">
      <h1 className="Contact">Contact Me</h1>
      <div className="Text-Input">
        <h3>Name: </h3>
        <TextField
          label="Please enter your name here."
          variant="filled"
          className="Text-Field"
          value={props.MessengerName}
        ></TextField>
      </div>
      <div className="Text-Input">
        <h3>Email: </h3>
        <TextField
          label="Please enter the email address you would like to be reached at."
          variant="filled"
          value={props.Email}
        ></TextField>
      </div>
      <div className="Text-Input">
        <h3>Message:</h3>
        <TextField
          multiline={true}
          label="Please enter a message you would like to send."
          variant="filled"
          sx={{ color: "rbga(255,255,255,1)" }}
          value={props.Message}
        ></TextField>
      </div>
      <div className="Col1">
        <button
          onClick={onSubmitClick}
          className="Submit-Button"
          label="Submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
