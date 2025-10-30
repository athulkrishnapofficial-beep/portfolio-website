import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_cn9e2qr", // Replace with your actual EmailJS Service ID
        "template_wyfwg9c", // Replace with your EmailJS Template ID
        form.current,
        "Yg0yzLUtfkoG55PUA" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatusMessage("❌ Failed to send. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-[#041b2d] via-[#072c42] to-[#0b3b57] text-gray-100 rounded-3xl border border-sky-700/20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-sky-300 mb-10">
        Get In Touch
      </h2>

      <div className="w-full max-w-xl bg-[#0d2133]/70 p-8 rounded-2xl shadow-lg border border-sky-700/20 backdrop-blur-md">
        <p className="text-lg text-gray-300 text-center mb-6">
          Have a question or want to collaborate? Drop me a message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-sky-700/20 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-sky-700/20 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-sky-700/20 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex justify-center items-center gap-3 px-6 py-3 font-bold rounded-md transition-all shadow-md ${
              isSending
                ? "bg-sky-900 cursor-not-allowed"
                : "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-500/20"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}{" "}
            <FaPaperPlane
              className={`${isSending ? "animate-none" : "animate-pulse"}`}
            />
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-sky-300 mt-4 animate-fadeIn">
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
