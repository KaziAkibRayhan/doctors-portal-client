import React from "react";
import bg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div>
            <h6 className="text-xl font-bold text-primary">Contact Us</h6>
            <h4 className="text-4xl font-medium text-white">
              Stay connected with us
            </h4>
          </div>
          <form className="mt-8   ">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-md w-full max-w-xs mt-2"
            />
            <textarea className="textarea w-80 mt-2 h-24" placeholder="Your Message"></textarea>
          </form>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
