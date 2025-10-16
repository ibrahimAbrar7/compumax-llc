"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "SERVICES", href: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 border-b ${
        sticky ? "fixed top-0 bg-white shadow-lg py-2" : "relative py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "180px", height: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#00194b] font-semibold text-sm hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-6 py-2 border border-blue-100 rounded-full font-semibold text-[#00194b] hover:bg-[#00194b] hover:text-white transition"
        >
          CONTACT US <FiExternalLink />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00194b] text-2xl"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* Mobile Sidebar */}
        <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl p-6 flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "180px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Close Button */}
          <button
            className="self-end text-2xl text-[#00194b] mb-6"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#00194b] font-normal text-lg hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="mt-6 flex items-center gap-2 px-4 py-2 border border-blue-100 rounded-full font-semibold text-[#00194b] hover:bg-[#00194b] hover:text-white transition"
          >
            CONTACT US <FiExternalLink />
          </Link>
        </div>
      </div>
    </header>
  );
}
