"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center items-center justify-center">
        <div className="text-green-500 font-mono text-xl mr-4 py-4">04.</div>
        <h2 className="text-4xl font-semibold text-white mr-8 py-4">Shoot Me a Note</h2>

        {/* Description */}
        <p className="text-gray-400 mb-7 py-4">
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.
        </p>

        {/* Call to Action Button */}
        <Link
          href="mailto:rachit1031@gmail.com"
          className="font-mono inline-block px-6 py-4 font-semibold rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-300 mb-12">
          Say hello
        </Link>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/Exterminator11"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Github">
            <Github className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors duration-300" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rachit-das-0a7714232/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
