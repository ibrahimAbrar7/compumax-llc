"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ["HOME", "ABOUT US", "PORTFOLIO", "SERVICES"];

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${sticky ? "fixed top-0 bg-white shadow-lg py-2" : "relative py-4"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "180px", height: "auto" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[#00194b] text-sm font-semibold">
          {links.map(l => l === "SERVICES" ? (
            <div key={l} className="relative group">
              <button className="flex items-center gap-1">{l} ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40">
                {["Service 1", "Service 2", "Service 3"].map(s => (
                  <a key={s} href="#" className="block px-4 py-2 hover:bg-gray-100">{s}</a>
                ))}
              </div>
            </div>
          ) : <a key={l} href="#">{l}</a>)}
        </nav>

        {/* Desktop Contact Button */}
        <a href="#" className="hidden md:flex items-center gap-2 px-6 py-2 border border-blue-100 rounded-full font-semibold text-[#00194b] hover:bg-[#00194b] hover:text-white transition">
          CONTACT US <FiExternalLink />
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#00194b] text-2xl" onClick={() => setOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
        <div className="absolute top-0 right-0 w-64 h-full bg-white/95 shadow-2xl p-6 flex flex-col space-y-5">

          {/* Logo at the top */}
          <div className="flex items-center gap-3 mb-12">
            <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "180px", height: "auto" }}
          />
          </div>

          {/* Close Button */}
          <button className="self-end text-2xl text-[#00194b] -mt-10" onClick={() => setOpen(false)}>
            <FiX />
          </button>

          {/* Menu Links */}
          {links.map(l => l === "SERVICES" ? (
            <details key={l} className="space-y-2 ">
              <summary className="cursor-pointer font-medium">{l}</summary>
              <div className="ml-4 flex flex-col gap-3">
                {["Service 1", "Service 2", "Service 3"].map(s => (
                  <a key={s} href="#" onClick={() => setOpen(false)}>{s}</a>
                ))}
              </div>
            </details>
          ) : (
            <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>
          ))}

          {/* Contact Button */}
          <a href="#" className="mt-4 flex items-center gap-2 px-4 py-2 border border-blue-100 rounded-full font-semibold text-[#00194b] hover:bg-[#00194b] hover:text-white transition">
            CONTACT US <FiExternalLink />
          </a>
        </div>
      </div>
    </header>
  );
}
