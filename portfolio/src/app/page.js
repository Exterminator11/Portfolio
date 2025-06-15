"use client"
import Introduction from "./components/introduction";
import Experience from "./components/experience";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <div>
    <header className="px-8 py-4">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-green-500 hover:text-green-600 font-mono text-xl font-bold">
            Rachit Das
          </Link>
        </div>

        {/* Main Navigation */}
        <nav aria-label="Primary" className="flex-1 flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA and External Links */}
        <div className="flex items-center space-x-4 flex-shrink-0">
        <Link
            href="https://docs.google.com/document/d/1bHRazMEQ6M3XOG4ksYPQkxggl4aU4XPnaOr9DiV0i3g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
            Resume
          </Link>

        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-green-500 hover:text-green-600 font-mono text-xl font-bold">
            Rachit Das
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-500 hover:text-green-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 border-t border-green-500/20 pt-4">
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="block text-green-500 hover:text-green-600 font-mono">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="block text-green-500 hover:text-green-600 font-mono">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="block text-green-500 hover:text-green-600 font-mono">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block text-green-500 hover:text-green-600 font-mono">
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-green-500/20">
              <Link
                href="https://drive.google.com/file/d/1M3Ee_GG65bQuaIkGPGi5qvE28fd1z1IH/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 font-mono transition-colors duration-200">
                Resume
            </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
    <div><Introduction /></div>
    <div id="about"><AboutMe /></div>
    <div id="experience"><Experience/></div>
    <div id="projects"><Projects/></div>
    <div id="contact"><Contact/></div>
   </div>
  );
}
