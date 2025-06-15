"use client"

import Link from "next/link";

import { useState, useEffect } from 'react';

export default function Introduction() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Rachit Das.', 'ML Engineer.', 'AI Developer.'];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <div>
      <main className="flex items-center min-h-screen px-16">
        <div className="border-solid border-red-500"></div>
        {/* Main content section */}
        <section className="flex-grow px-6 max-w-4xl">
          {/* Introduction */}
          <h5 className="text-green-500 font-mono">Hi, I am</h5>
          <h1 className="text-5xl font-semibold mt-4">
            {displayText}
            <span className="animate-pulse text-green-500">|</span>
          </h1>
          <h2 className="text-4xl font-semibold text-gray-500 mt-4">
            I help machines learn.
          </h2>
          <p className="text-gray-400 mt-4">
            I'm a Machine Learning Engineer developing production-ready AI models and integrating them into scalable backend services.
          </p>
          <button className="font-mono inline-block px-6 py-4 font-semibold rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-300 mb-12 mt-6">
            <Link href="https://medium.com/@rachit1031"
              target="_blank"
              rel="noopener noreferrer">
              Check out my blog!
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}