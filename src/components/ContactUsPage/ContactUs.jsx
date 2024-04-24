import React, { useRef, useState } from "react";
import styles from "../../style";
import emailjs from "@emailjs/browser";

import { call, message, location, contact } from "../../assets";

const ContactUs = () => {

  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_kjbfrlb", "template_purmuqx", form.current, {
        publicKey: "t93NEg-srlerr1Vbm",
      })
      .then(
        (result) => {
          console.log(result.text);
          setFormValues({
            name: "",
            mobile: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`flex flex-col ${styles.paddingY}  header-bg`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-4 px-2 z-10 md:bottom-[10rem] text-center`}
      >
        <div className="flex md:flex-row flex-col gap-4 text-white rounded-xl relative md:w-[1200px]">
          {/* Left Column */}
          <h2 className="text-5xl md:text-5xl font-bold text-gradient md:hidden text-left px-3 pt-3">Contact Us</h2>
          <p className="text-base text-left px-3 md:text-lg mb-4 text-[#c9c9c9] md:hidden z-20">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="w-full md:w-1/3 md:border md:border-[#ffffff24] p-4 rounded-xl relative md:h-[600px]">
            {/* Contact Image */}
            <img src={contact} alt="Contact" className="absolute md:bottom-0 bottom-5 right-[0] z-10 md:w-[160px] w-[120px] md:h-[400px] h-70" />
            {/* Call */}
            <div className="flex items-center mb-4">
              <img src={call} alt="Call" className="w-3 h-3 mr-2" />
              <p className="text-left">+91-7906854790</p>
            </div>
            {/* Mail */}
            <div className="flex items-center mb-4">
              <img src={message} alt="Mail" className="w-4 h-4 mr-2" />
              <a href="mailto:info@copartner.in" className="text-left">info@copartner.in</a>
            </div>
            {/* Location */}
            <div className="flex">
              <img src={location} alt="Location" className="w-5 h-5 mr-2 mt-1" />
              <p className="text-left">Copartner, Hailgro Tech, 546, 5th floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana 122018</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col w-full md:w-2/3 md:p-10 px-5 rounded-lg text-left border-[1px] border-[#ffffff24] md:h-[600px] h-[520px]">
            {/* Heading */}
            <h2 className="md:text-6xl font-bold mb-4 text-gradient md:block hidden">Contact Us</h2>
            {/* Description */}
            <p className="text-base md:text-lg mb-4 text-[#ffffff5a] md:block hidden">
              We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            {/* Form */}
            <form ref={form} className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
              <div className="flex flex-col md:flex-row gap-7 py-5">
                <div className="flex flex-col w-full md:w-1/2">
                  <input onChange={handleInputChange} type="text" id="name" name="name" placeholder="Name" className="border border-[#ffffff40] border-opacity-50 bg-transparent py-3 p-2 rounded-xl" />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <input onChange={handleInputChange} type="email" id="email" name="email" placeholder="Email" className="border border-[#ffffff3d] border-opacity-50 bg-transparent py-3 p-2 rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col pb-4">
                <input onChange={handleInputChange} type="tel" id="mobile" name="mobile" placeholder="Mobile Number" className="border border-[#ffffff3d] border-opacity-50 bg-transparent py-3 p-2 rounded-xl" />
              </div>
              <div className="flex flex-col">
                <textarea onChange={handleInputChange} id="message" name="message" rows="6" placeholder="Message" className="border border-[#ffffff3d] border-opacity-50 bg-transparent py-3 p-2 rounded-xl"></textarea>
              </div>
              <div className="text-center md:py-3 py-3">
                <button type="submit" className="bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-black py-2 px-7 rounded-md transition duration-300">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




