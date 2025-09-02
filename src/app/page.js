import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <BackgroundGradientAnimation>
        <ParticleTextEffect words={["Welcome To","A Run Club","4-MFS","That Dont Run","Orlando Chapter"]}/>
      </BackgroundGradientAnimation>
    </div>
  );
}