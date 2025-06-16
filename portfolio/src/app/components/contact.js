"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="section bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-500 font-mono text-lg md:text-xl mb-4">04.</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Shoot Me a Note</h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you.
          </p>

          {/* Call to Action Button */}
          <Link
            href="mailto:rachit1031@gmail.com"
            className="font-mono inline-block px-4 md:px-6 py-3 md:py-4 font-semibold rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-background transition-colors duration-300 mb-12">
            Say hello
          </Link>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6">
            <Link
              href="https://github.com/Exterminator11"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Github"
              className="hover:scale-110 transition-transform duration-300">
              <Github className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground hover:text-green-500 transition-colors duration-300" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/rachit-das-0a7714232/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground hover:text-green-500 transition-colors duration-300" />
            </Link>

            <Link
              href="mailto:rachit1031@gmail.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Mail"
              className="hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground hover:text-green-500 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
