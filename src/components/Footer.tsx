"use client"

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">DDS Consulting</h2>
          <p className="mt-3 text-gray-400">
            Empowering businesses with strategic consulting solutions to drive success.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <Link href="#" className="text-gray-400 hover:text-blue-500 transition">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500 transition">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500 transition">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:info@ddsconsulting.com" className="text-gray-400 hover:text-blue-500 transition">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} DDS Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
