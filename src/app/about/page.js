"use client";

import { HeroWithVideo } from "@/components/ui/hero-with-video";

export default function AboutPage() {
  return (
    <div>
      <HeroWithVideo 
        brandName="ABOUT US"
        heroTitle="Get to Know Our Run Club"
        heroSubtitle="More Than Just Running"
        heroDescription="We're a community of like-minded individuals who believe in having fun while staying active. No pressure, no judgment - just good vibes and great company."
        backgroundImage="/images/running-image-thumbnail.jpg"
        videoUrl="" // Add your about us video URL here if needed
      />
    </div>
  );
}
