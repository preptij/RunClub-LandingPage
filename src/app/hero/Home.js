import { HeroWithVideo } from "@/components/ui/hero-with-video";

export default function HeroPage() {
  return (
    <div className="min-h-screen">
      <HeroWithVideo 
        heroTitle="Run Club For MFS That Don't Run"
        heroDescription="Join our community of casual runners and fitness enthusiasts"
      />
    </div>
  );
}
