// This will hold the sections that can be filled out elsewhere

import { useRef } from "react";
import "../main.css"

import React from 'react'

export default function Section(props) {

    const navRef = useRef();
    // const expandText = () =>
    // {
    //     // want to expand the text from a smaller version to a larger one
    //     // navRef.current
    // }

    // blurb - Hi, my name is Caleb Gibson and I am a senior at the Univeristy of Pittsburgh. Here's some more info about me!
    /* contentText - I am a 22 year old Computer Engineering student at Pitt. I am getting a minor in Physics and have grown to appreciate Embedded Systems Design,
          Robotics, FPGA Design, and Automation type of projects. I am currently looking for an internship for Summer, 2023 and for full time Work
          after I graduate in Decemeber 2023! I am looking for positions in Web Development, Automation, General Software Engineering, and Embedded System Engineering. */

  return (
    <div ref = {navRef}>
        <h1>{props.section}</h1>
        <h3>{props.blurb}</h3>
        <p>{props.contentText}</p>
    </div>
  )
}
