"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E2E] text-gray-200 relative">
      {/* Top Contact */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 border-b border-gray-700">
        {[
          { icon: <Mail />, label: "Write to us", value: "info@compumaxllc.com", href: "mailto:info@compumaxllc.com" },
          { icon: <Phone />, label: "Call Us (USA)", value: "201-298-1974", href: "tel:2012981974" },
          { icon: <MapPin />, label: "Our Office", value: "341 All Angels Hill Rd, Wappingers Falls, NY 12590",href: "https://maps.app.goo.gl/66poP8VVJtMtfXu39" }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">{item.icon}</div>
            <div>
              <p className="text-sm">{item.label}</p>
              {item.href ? (
                <Link href={item.href} className="text-lg font-semibold block leading-snug">{item.value}</Link>
              ) : (
                <p className="text-lg font-semibold leading-snug">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-5">About Us</h3>
          <p className="text-sm mb-6 leading-relaxed">
            We are a leading web development and design company, specializing in creating innovative digital solutions.
          </p>
          <div className="flex items-center border-b border-gray-600 pb-3 mb-5">
            <input type="email" placeholder="Enter your email" className="bg-transparent text-sm w-full outline-none" />
            <Send className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="flex gap-3 flex-wrap">
            {["FACEBOOK", "TWITTER", "LINKEDIN"].map((s, i) => (
              <Link key={i} href="#" className="bg-white/10 px-4 py-2 rounded-lg text-xs hover:bg-white/20">{s}</Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="pl-0 md:pl-10">
          <h3 className="text-xl font-semibold mb-5">Services</h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            {["SEO and Web Optimization", "Data Analysis & Visualization", "Website Development", "Modern Tech Solution", "UI/UX Design Services", "Custom Software Development"].map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link href="/" className="text-white hover:underline">Home</Link></li>
            <li><Link href="/about" className="text-white hover:underline">About</Link></li>
            <li><Link href="/portfolio" className="text-white hover:underline">Portfolio</Link></li>
            <li><Link href="/services" className="text-white hover:underline">Services</Link></li>
            <li><Link href="/contact" className="text-white hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full animate-gradient bg-gradient-to-r from-cyan-400 via-green-600 via-yellow-600 via-red-600 to-pink-600 text-white text-white text-center py-4 text-sm flex flex-col md:flex-row items-center justify-between px-6">
        <p>© 2025 Compumax LLC, All rights reserved.</p>
        <p>Developed by Compumax LLC</p>
      </div>

      {/* Scroll Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition">
        ↑
      </button>
    </footer>
  );
}
