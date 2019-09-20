import React from "react";
import Hero from "../Components/Hero";
import ContactImg from "../Images/contactBcg.jpeg";
import Contact from "../Components/ContactPage/Contact";

const ContactPage = () => {
  return (
    <>
      <Hero img={ContactImg} />
      <Contact />
    </>
  );
};

export default ContactPage;
