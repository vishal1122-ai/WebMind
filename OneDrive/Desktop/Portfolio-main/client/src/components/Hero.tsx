import { useState, useEffect } from "react";
import ThreeBackground from "./ThreeBackground";
import type { AnimationType } from "@/lib/three-animations";

export default function Hero() {
  const [currentAnimation, setCurrentAnimation] =
    useState<AnimationType>("neural");

  useEffect(() => {
    // Simplified hero animations for better performance
    setTimeout(() => {
      if (typeof window !== "undefined" && window.gsap) {
        const { gsap } = window;

        // Simple fade-in animations
        gsap.utils
          .toArray(".text-reveal-inner")
          .forEach((element: any, index: number) => {
            gsap.fromTo(
              element,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out",
              }
            );
          });
      }
    }, 300);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <ThreeBackground
        currentAnimation={currentAnimation}
        onAnimationChange={setCurrentAnimation}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="text-reveal mb-6">
          <h1 className="text-reveal-inner text-6xl md:text-8xl font-bold mb-4 text-black dark:text-white">
            Hi, I'm <span className="text-electric animate-glow">Vishal</span>
          </h1>
        </div>
        <div className="text-reveal mb-8">
          <p className="text-reveal-inner text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I build stunning, modern UIs that make users fall in love
          </p>
        </div>
        <div className="text-reveal">
          <button
            onClick={scrollToContact}
            className="text-reveal-inner bg-gradient-to-r from-electric to-neon px-8 py-4 rounded-full text-black dark:text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-8 animate-bounce">
        <i className="fas fa-chevron-down text-electric text-xl"></i>
      </div> */}
    </section>
  );
}
