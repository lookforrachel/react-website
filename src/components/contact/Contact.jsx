import { useState } from "react";
// import React, { useRef} from 'react'
import "./contact.scss";
// import { send } from "emailjs-com";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
const form = useRef();
const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}


const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(process.env)
    emailjs.sendForm(
    `${process.env.REACT_APP_SERVICE_ID}`,
    `${process.env.REACT_APP_TEMPLATE_ID}`,
    form.current,
    `${process.env.REACT_APP_PUBLIC_KEY}`
  )
  .then((response) => {
    console.log('Message sent successfully', response.status, response.text)
  })
  .catch((error) => {
    console.log('Failed', error)
  })
  alert(inputs);
  setInputs('')
}
  return (
    <div className = "contact" id="contact">
      <div className="left"></div>
      <div className="right">
          <h2>Get in touch!</h2>
          <form ref={form} onSubmit={handleSubmit}>
              <input onChange={handleChange} type="email" name="email" id="email" className="email" placeholder="Email" value={inputs.email || ""} required/>
              <input onChange={handleChange} type="text" name="name" id="name" className="name" placeholder="Name" value={inputs.name || ""} required/>
              <input onChange={handleChange} type="text" name="subject" id="subject" className="subject" placeholder="Subject" value={inputs.subject || ""} required/>
              <textarea onChange={handleChange} type="message" name="message" id="message" className="message" placeholder="Message" value={inputs.message || ""} required></textarea>
              <button type="submit">Send</button>
              {/* {inputs.message && <span>Thanks!</span>} */}
          </form>
      </div>
    </div>
  )
}
