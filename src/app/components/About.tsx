"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-12 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d44] leading-tight">
              <span className="text-[#00194b]">About</span> Compumax LLC
            </h2>
            <p className="text-md md:text-justify md:text-lg text-gray-600 leading-relaxed">
              Compumax LLC is a forward-thinking IT company dedicated to helping businesses succeed in the digital world. We provide creative and responsive website design, custom development, SEO management, performance optimization, in-depth analytics, and thorough testing to ensure your online presence is strong, secure, and results-driven. <br /><br />

With a focus on innovation and quality, we deliver digital solutions that enhance user experience, boost visibility, and drive growth. At Compumax LLC, our mission is simple: to transform ideas into impactful online experiences that help your business thrive.

            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-[#00194b] text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/img-6.jpg"
                alt="About Hero"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 -left-8 w-32 h-32 bg-black opacity-30 rounded-full"></div>
            <div className="absolute bottom-0 -right-8 w-24 h-24 bg-black opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;