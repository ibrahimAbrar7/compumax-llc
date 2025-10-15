"use client";

import { Users, Headphones, DollarSign } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team Members",
      description:
        "We take pride in assembling a diverse and highly skilled team.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-red-500" />,
      title: "Fastest Customer Service",
      description:
        "We pride ourselves on providing the fastest customer service in the industry.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-pink-600" />,
      title: "Reasonable Pricing",
      description:
        "We believe in providing reasonable pricing that offers exceptional value.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-xl hover:shadow-lg transition duration-300"
          >
            <div className="p-3 rounded-xl bg-blue-50 flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
