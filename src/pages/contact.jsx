import React from "react";
import Image from "../assets/image.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side - Text section */}
        <div>
          <h2 className="text-indigo-600 text-sm font-semibold uppercase">
            Contact
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Get in touch
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Get in touch with our experts and secure an edge in automation.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your first name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <img
            src={Image}
            alt="Contact illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
