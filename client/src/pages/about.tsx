import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpwdlvjn");

  if (state.succeeded) {
    return <p className="text-white text-center mt-4">Thanks for messaging me!</p>;
  }

  return (
    <div className="max-w-lg mx-auto"> {/* Added max-w-lg and mx-auto to center and limit width */}
      <h2 className="text-3xl mb-4 text-white text-center">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full h-12 p-3 border border-white bg-gray-900 text-white rounded"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full h-40 p-3 border border-white bg-gray-900 text-white rounded"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
const About = () => {
  

  
  return (
    <div>
      <div className="min-h-screen bg-gray-700 scroll-smooth">
      <Head>
        <title>Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
      </Head>
      <div className="pt-24 px-4 md:px-10 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h1
              className="text-center text-4xl mb-4 text-white"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              About Me
            </h1>
            <div className="text-white">
              <p className="text-lg">
                Hi, I'm <b>Erik Thompson</b>,
                <br />a Computer Science graduate of{" "}
                <a
                  href="https://www.osu.edu/"
                  className="text-blue-400 underline"
                >
                  The Ohio State University Columbus Campus
                </a>
                , specializing in Databases and Data Science to expand my real-world
                problem-solving skills.
              </p>
              <p className="text-lg mt-5 mb-5">More things about me:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  I'm seeking job opportunities to develop my experience
                  in the tech field.
                </li>
                <li>
                  I'm involved with the{" "}
                  <a
                    href="https://osucyber.club/"
                    className="text-blue-400 underline"
                  >
                    Cybersecurity Club
                  </a>{" "}
                   a club with interactive cybersecurity training and practice events.
                </li>
                <li>
                  In my free time, I enjoy playing League of Legends and Legion TD 2 on Steam App.
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
    
       </div> 
  );
};

export default About;
