import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { themeContext } from "../../Context";
import Spinner from "../Spinner/Spinner";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // if (!name || !email) {
    //   setError(true);
    //   return false;
    // }
    setLoading(true);
    emailjs
      .sendForm(
        "service_cjo1l7j",
        "template_sury0mf",
        form.current,
        "q_2ooziAzdyWko9vQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          {/* {error && !name && <span className="invalid-in">error</span>} */}
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          {/* <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.values);
            }}
          /> */}
          {/* {error && !email && <span>error</span>} */}
          <textarea name="message" className="user" placeholder="Message" />
          <button type="submit" className="button">
            {loading && <Spinner /> ? <Spinner /> : "SEND"}
          </button>
          <span className="co_box">{done && "Thanks for Contacting"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
