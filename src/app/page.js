"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import RegisterSection from "@/components/RegisterSection";
import WelcomeAnimation from "@/components/WelcomeAnimation";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && (
        <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      )}

      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />

        {/* Placeholder sections for other parts of your one-page website */}

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Register Section */}
        <RegisterSection />
      </div>
    </>
  );
}
