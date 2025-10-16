"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-[#101a54]  mb-12">
          Contact Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100  rounded-lg shadow-lg p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700  mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00194b] bg-transparent placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700  mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00194b] bg-transparent placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700  mb-2">
                  Subject
                </label>
                 <input
                  type="text"
                  placeholder="Enter the subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00194b] bg-transparent placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700  mb-2">
                  Message
                </label>
                 <textarea
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00194b] bg-transparent placeholder-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#00194b] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2"
              >
                SUBMIT FORM
                <span className="text-xl">↗</span>
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.669424908119!2d-73.920523!3d41.579915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd35e32e04e9b5%3A0x22b61dc2c8474c63!2s341%20All%20Angels%20Hill%20Rd%2C%20Wappingers%20Falls%2C%20NY%2012590%2C%20USA!5e0!3m2!1sen!2sin!4v1676710898726!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
