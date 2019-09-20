import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <Title title="Contact Us" center />
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <form
            className="mt-5"
            action="https://formspree.io/glastondsouza97@gmail.com"
            method="POST"
          >
            {/* First */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Glaston D'souza"
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="example@email.com"
              />
            </div>
            {/* Subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              />
            </div>
            {/* Message */}
            <div className="form-group">
              <textarea
                name="form"
                className="form-control"
                rows="10"
                placeholder="Hello There Buddy!"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="form-group">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
