import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  // Replace this with your actual Formspree endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_UNIQUE_ID";

  return (
    <section className="relative w-full py-20 bg-gradient-to-b border-sky-700/20 via-sky-950/30 border-sky-700/20 text-white overflow-hidden">
      {/* Decorative glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* Section Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-5xl font-extrabold text-sky-300 tracking-wide drop-shadow-[0_0_25px_rgba(56,189,248,0.6)] animate-pulse">
          Get In Touch
        </h2>
        <p className="text-sky-200/80 mt-4 max-w-2xl">
          Have a question or want to work together? Let’s connect and make something amazing!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="w-full max-w-lg mx-auto bg-gray-900/60 backdrop-blur-xl border border-sky-500/20 p-10 rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all duration-500">
        <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-sky-200 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-400 transition-all"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-sky-200 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-400 transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-sky-200 mb-2"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-400 transition-all"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-3 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] active:scale-95 transition-all duration-300"
            >
              Send Message <FaPaperPlane className="animate-pulse" />
            </button>
          </div>
        </form>
      </div>

      
    </section>
  );
};

export default Contact;
