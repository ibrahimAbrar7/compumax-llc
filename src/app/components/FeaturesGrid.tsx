"use client";

import Image from "next/image";
import { ShieldCheck, Layout, ThumbsUp, Target } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: "Advanced Frontend Frameworks",
      description: "Build dynamic and responsive web applications.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Seamless Integration Tools",
      description:
        "Connect effortlessly with popular third-party applications.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Security Protocols",
      description: "Protect your data with cutting-edge security features.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "User-Friendly Interface",
      description: "Experience software designed for simplicity and ease of use.",
    },
  ];

  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-6 lg:grid-cols-3">
        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:col-span-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image + Stats */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/team.jp" // replace with your image
            alt="Team"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-600/70 to-transparent flex items-end">
            <p className="text-white font-bold text-2xl p-6 leading-snug">
              12000+ <br /> clients from 30 <br /> countries in Europe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
