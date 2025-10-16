// components/TopBar.tsx
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
export default function TopBar() {
    return (
        <div className="w-full animate-gradient bg-gradient-to-r from-cyan-400 via-green-600 via-yellow-600 via-red-600 to-pink-600 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-xs lg:text-sm">
                {/* Left - Address */}
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>341 All Angels Hill Rd <br />
                        Wappingers Falls, NY 12590</span>
                </div>

                {/* Middle - Offer */}
                <div className="hidden sm:block text-center">
                    We offer cutting-edge <strong>web developments</strong> and design solutions.{" "}
                    <Link href="#" className="underline hover:text-yellow-300">
                        Learn more →
                    </Link>
                </div>

                {/* Right - Social Icons */}
                <div className="flex items-center gap-3">
                    <Link href="#" className="p-1 border border-white rounded-full hover:bg-white hover:text-black transition">
                        <FaFacebookF size={14} />
                    </Link>
                    <Link href="#" className="p-1 border border-white rounded-full hover:bg-white hover:text-black transition">
                        <FaXTwitter size={14} />
                    </Link>
                    <Link href="#" className="p-1 border border-white rounded-full hover:bg-white hover:text-black transition">
                        <FaInstagram size={14} />
                    </Link>
                    <Link href="#" className="p-1 border border-white rounded-full hover:bg-white hover:text-black transition">
                        <FaLinkedinIn size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
