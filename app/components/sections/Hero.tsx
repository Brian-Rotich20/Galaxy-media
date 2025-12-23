'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

const logos = [
  { src: "/logos/alumil.jpg", alt: "Alumil" },
  { src: "/logos/intellisoft.png", alt: "Intellisoft" },
  { src: "/logos/jacaranda-health-1.png", alt: "Jacaranda Health" },
  { src: "/logos/mercy-corps-logo-1.png", alt: "Mercy Corps" },
  { src: "/logos/kenyatta-university.jpg", alt: "Kenyatta University" },
  { src: "/logos/Primerio.jpg", alt: "Primerio" },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          {/* Brand Name with Fade In */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <p className="text-sm uppercase tracking-widest text-white/80">
              Galaxy Productions
            </p>
          </div>

          {/* Decorative Line - Bold */}
          <div
            className={`mb-8 flex items-center justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          >
            <div className="h-1 w-16 bg-yellow-400" />
            <div className="h-1 w-16 bg-yellow-400" />
            <div className="h-1 w-16 bg-yellow-400" />
          </div>

          {/* Main Title with Staggered Animation */}
          <div className="mb-8">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight text-white transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block">Visual stories</span>{' '}
              <span className="inline-block">that move</span>{' '}
              <span className="inline-block">brands</span>
            </h1>
          </div>

          {/* Services Description */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              We craft compelling video content, cinematic photography, and 
              immersive brand experiences that captivate audiences and elevate 
              your message.
            </p>

            {/* CTA Button */}
            <button
              className={`px-8 py-3 bg-yellow-400 text-black font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};


// Combined export
export default function HeroWithLogos() {
  return (
    <>
      <Hero />
      
    </>
  );
}