import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Contact(props) {
  const useStyles = makeStyles((theme) => ({
    input: {
      background: "rgb(0,0,0)",
    },
  }));
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
          color="white"
          value={props.Message}
        ></TextField>
      </div>
    </div>
  );
}
