"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/utils";
import VehicleAnimation from "./VehicleAnimation";
import FlyerModal from "./FlyerModal";

export default function HeroSection() {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const flyers = [
    {
      id: 1,
      src: "/swiftflyer.jpg",
      alt: "Swift Rides Pricing",
      title: "Student Pricing",
      fallback: { text: "₦5000", subtext: "PRICE" },
      borderColor: "border-success/20 hover:border-success/40",
      bgGradient: "from-success/10 to-primary/10",
      textColor: "text-success",
    },
    {
      id: 2,
      src: "/swiftflyer1.jpg",
      alt: "Swift Rides Services",
      title: "Our Services",
      fallback: { text: "Services", subtext: "INFO" },
      borderColor: "border-primary/20 hover:border-primary/40",
      bgGradient: "from-primary/10 to-accent/10",
      textColor: "text-primary",
    },
    {
      id: 3,
      src: "/swiftflyer2.jpg",
      alt: "Swift Rides Information",
      title: "About Swift Rides",
      fallback: { text: "Swift", subtext: "INFO" },
      borderColor: "border-accent/20 hover:border-accent/40",
      bgGradient: "from-accent/10 to-primary/10",
      textColor: "text-accent",
    },
  ];
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 px-6 py-20 lg:py-32 min-h-screen flex items-start"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Hero Content */}
          <div className="max-w-xl">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-primary">
                🚀 Now serving Covenant University
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get Back to School <span className="text-primary">Swiftly</span> &
              Safely
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl">
              Skip the hassle of finding transport from the airport. Swift Rides
              connects Covenant University students with reliable, affordable
              rides straight to campus.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#register");
                }}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
              >
                Book a Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#how-it-works");
                }}
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 bg-white px-8 py-4 text-lg font-semibold text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5"
              >
                How it Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Safe & Verified
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  24/7 Support
                </span>
              </div>
            </div>
            {/* Current Offers/Discounts */}
            <div className="mt-8">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-sm font-medium text-white">
                  💰 Pricing & Information
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {flyers.map((flyer) => (
                  <div
                    key={flyer.id}
                    onClick={() => setSelectedFlyer(flyer)}
                    className={`group relative overflow-hidden rounded-xl bg-white border-2 ${flyer.borderColor} p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
                  >
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${flyer.bgGradient} rounded-lg mb-3 flex items-center justify-center`}
                    >
                      <Image
                        src={flyer.src}
                        alt={flyer.alt}
                        width={300}
                        height={225}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className={`hidden flex-col items-center justify-center ${flyer.textColor}`}
                      >
                        <span className="text-2xl font-bold">
                          {flyer.fallback.text}
                        </span>
                        <span className="text-xs">
                          {flyer.fallback.subtext}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center font-medium">
                      {flyer.title}
                    </p>
                    {/* Click indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-1">
                        <span className="text-xs text-gray-600">👁️</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-gray-500 text-center">
                *Click on any flyer to learn more about Swift Rides services.
              </p>
            </div>
          </div>

          {/* Hero Animated Illustration */}
          <div className="relative self-start">
            <VehicleAnimation />

            {/* Stats cards */}
            <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Safe & Verified</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-success">99%</div>
                <div className="text-sm text-gray-600">
                  Guaranteed On-time Arrivals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 h-40 w-40 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 h-32 w-32 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl"></div>

      {/* Flyer Modal */}
      <FlyerModal
        flyer={selectedFlyer}
        onClose={() => setSelectedFlyer(null)}
        onBookNow={() => scrollToSection("#register")}
      />
    </section>
  );
}
