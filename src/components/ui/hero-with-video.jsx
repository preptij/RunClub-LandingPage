"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause, Mail, ArrowRight } from 'lucide-react';

const HeroWithVideo = ({
  brandName = "4MFSTHATDONTRUN",
  heroTitle = "Run Club For MFS That Don't Run",
  heroSubtitle = "Orlando Chapter",
  heroDescription = "Join our community of casual runners and fitness enthusiasts. To join us follow our IG from the navigation Below",
  backgroundImage = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  emailPlaceholder = "enter@email.com"
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setIsVideoPaused(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };

  const handleResumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPaused(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* --- Hero Section --- */}
          <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
            <h2 className="text-sm sm:text-base font-semibold tracking-wider text-gray-400 mb-2">
              {brandName}
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {heroTitle}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
              {heroSubtitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              {heroDescription}
            </p>
          </div>

          {/* --- Media Header --- */}
          <header className="relative w-full aspect-video rounded-3xl overflow-hidden">
            <img
              src={backgroundImage}
              alt="Running club"
              className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
            />
            <video
              ref={videoRef}
              src={videoUrl}
              className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
              onEnded={handleVideoEnded}
              playsInline
              muted
            />
            <div className="absolute bottom-5 right-5 z-10">
              {!isVideoPlaying ? (
                <button
                  onClick={handlePlayVideo}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                >
                  <Play className="h-7 w-7 text-white fill-white ml-1" />
                </button>
              ) : (
                <button
                  onClick={isVideoPaused ? handleResumeVideo : handlePauseVideo}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                >
                  {isVideoPaused ? (
                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                  ) : (
                    <Pause className="h-7 w-7 text-white fill-white" />
                  )}
                </button>
              )}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export { HeroWithVideo };