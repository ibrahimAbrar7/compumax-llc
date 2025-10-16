import React from "react";
import Image from "next/image";
import { ArrowRight, Plus, Star } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-8 flex justify-center bg-white">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="flex-1 bg-[#A5EEC8] rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <span className="bg-[#F94E77] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
            Compumax LLC
          </span>

          <h1
            className="font-bold text-[#0F1E3E] leading-snug mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Empowering Your Business with{" "}
            <br className="hidden md:block" /> Innovative IT Solutions
          </h1>

          <p
            className="text-gray-700 mb-8 max-w-lg"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
          >
            In today’s competitive business, the demand for efficient and
            cost-effective IT solutions has never been more critical.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
            <button className="bg-[#0056F6] text-white px-5 sm:px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition text-sm sm:text-base">
              CONTACT US <ArrowRight size={18} />
            </button>

            <div className="flex items-center gap-2 flex-wrap">
              <Star className="text-green-500 fill-green-500" size={18} />
              <span className="font-bold text-[#0056F6]">4.8</span>
              <span className="text-gray-600 text-xs sm:text-sm">
                From 200+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top Left */}
          <div className="bg-gradient-to-br from-[#054594] to-[#032D60] rounded-3xl flex items-center justify-center p-4">
            <Image
              src="/img-2.jpg" // replace with your actual image in /public/images
              alt="Mockup"
              width={220}
              height={140}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="bg-[#FF7A28] text-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h2
                className="font-bold mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                150+
              </h2>
              <p className="text-xs sm:text-sm">
                Have a lots of clients Worldwide
              </p>
            </div>
            <div className="flex items-center mt-4">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
              <span className="bg-[#0056F6] text-white text-xs font-semibold px-2 py-1 rounded-full -ml-2">
                5k+
              </span>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="bg-[#F94E77] text-white rounded-3xl p-4 sm:p-6 flex flex-wrap gap-2 items-center">
            {["Data Security", "Web Development", "Analytics & Optimization"].map(
              (service, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 border border-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                >
                  {service} <Plus size={14} />
                </span>
              )
            )}
          </div>

          {/* Bottom Right */}
          <div className="relative bg-[#032D60] rounded-3xl flex items-center justify-center flex-col overflow-hidden p-4 sm:p-6">
            <div className="text-white text-center z-10">
              <div className="w-20 sm:w-28 h-20 sm:h-28 border-[6px] border-white rounded-full flex items-center justify-center font-bold text-lg sm:text-2xl">
                88%
              </div>
              <p className="mt-2 text-xs sm:text-sm max-w-[140px] mx-auto">
                get 88% of the best services and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
