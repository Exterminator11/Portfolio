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
    <div className="section bg-background">
      <main className="container min-h-[calc(100vh-var(--section-spacing))] flex items-center">
        <section className="w-full max-w-4xl mx-auto">
          {/* Introduction */}
          <h5 className="text-green-500 font-mono text-lg md:text-xl">Hi, I am</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-foreground">
            {displayText}
            <span className="animate-pulse text-green-500">|</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mt-4">
            I help machines learn.
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl">
            I'm a Machine Learning Engineer developing production-ready AI models and integrating them into scalable backend services.
          </p>
          <button className="font-mono inline-block px-4 md:px-6 py-3 md:py-4 font-semibold rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-300 mt-6 md:mt-8">
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