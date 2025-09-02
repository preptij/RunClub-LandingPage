"use client";

import { ImageTrail } from "@/components/ui/image-trail";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const BackgroundGradient = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(
            calc(${mousePosition.x * 0.03}% - 15%), 
            calc(${mousePosition.y * 0.05}% - 5%)
          )`,
        }}
      >
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(18,113,255,0.08)_0,_rgba(0,0,0,0)_70%)]"
          style={{
            transform: `translate(calc(50% - ${mousePosition.x * 0.3}px), calc(50% - ${mousePosition.y * 0.3}px))`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(221,74,255,0.06)_0,_rgba(0,0,0,0)_60%)]"
          style={{
            transform: `translate(calc(30% + ${mousePosition.x * 0.2}px), calc(30% + ${mousePosition.y * 0.2}px))`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,220,255,0.05)_0,_rgba(0,0,0,0)_80%)]"
          style={{
            transform: `translate(calc(70% - ${mousePosition.x * 0.15}px), calc(70% - ${mousePosition.y * 0.15}px))`,
            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        ></div>
      </div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default function SponsorsPage() {
  const containerRef = useRef(null);
  
  // Sponsor images from the public/Sponsor directory
  const sponsorImages = [
    "/Sponsor /BarkHaven.jpg",
    "/Sponsor /Garp&Fuss.jpg",
    "/Sponsor /Gator's-Dockside.jpg",
    "/Sponsor /MEP-Realty-Investments.jpg",
    "/Sponsor /Primnose-Lanes.jpg",
    "/Sponsor /Ravenous-Pig.jpg",
    "/Sponsor /The-Draft-Academy.jpg"
  ];

  return (
    <BackgroundGradient>
      {/* Background image trail */}
      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={containerRef}>
        <ImageTrail 
          containerRef={containerRef}
          interval={300}
          rotationRange={15}
        >
          {sponsorImages.map((src, index) => (
            <div key={index} className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-white/20">
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="object-cover absolute inset-0 w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      
      {/* Static text overlay */}
      <div className="relative z-10 text-center p-8 w-full">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Become a sponsor TODAY!
            </span>
            <span className="ml-2">😁</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl">
            Join our community and support our mission
            <span className="block text-lg md:text-xl text-gray-400 mt-2">
              Click the IG icon in the navigation to get in contact
            </span>
          </p>
        </div>
      </div>
    </BackgroundGradient>
  );
}
