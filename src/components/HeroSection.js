"use client";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import scrollToSection from "@/utils";
import VehicleAnimation from "./VehicleAnimation";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 px-6 py-20 lg:py-32 min-h-screen flex items-center"
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
          </div>

          {/* Hero Animated Illustration */}
          <div className="relative">
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
    </section>
  );
}
