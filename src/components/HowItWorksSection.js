"use client";
import Link from "next/link";
import { FileText, CreditCard, Car, Zap, ArrowRight } from "lucide-react";
import scrollToSection from "@/utils";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Register Your Details",
      description:
        "Sign up with your travel information including arrival time, date and contact details. Quick and easy registration process.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-primary to-primary/80",
    },
    {
      number: "02",
      title: "Payment & Confirmation",
      description:
        "Our team will reach out to you for secure payment processing. Once confirmed, you'll receive all trip details and driver information.",
      icon: <CreditCard className="h-8 w-8" />,
      color: "from-accent to-accent/80",
    },
    {
      number: "03",
      title: "Your Ride Awaits",
      description:
        "Your verified driver will be ready at the registered airport at your specified time. Sit back, relax, and enjoy your comfortable ride to campus.",
      icon: <Car className="h-8 w-8" />,
      color: "from-success to-success/80",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-white relative overflow-hidden lg:py-32"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-tl from-accent/5 to-success/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            ⚡ Simple Process
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            How Swift Rides Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:text-xl">
            Getting back to Covenant University has never been easier. Follow
            these simple steps and we&apos;ll handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success opacity-20"></div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-24 h-16 w-0.5 bg-gradient-to-b from-gray-200 to-gray-100"></div>
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number & Icon */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      {step.icon}
                      <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 shadow-md">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {step.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 p-6 border border-primary/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">
                Ready to get started?
              </p>
              <p className="text-sm text-gray-600">
                Join hundreds of satisfied students
              </p>
            </div>
            <Link
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#register");
              }}
              className="ml-auto inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary lg:text-3xl">3</div>
            <div className="text-sm text-gray-600 font-medium">
              Simple Steps
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent lg:text-3xl">
              24/7
            </div>
            <div className="text-sm text-gray-600 font-medium">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success lg:text-3xl">
              100%
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Verified Drivers
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary lg:text-3xl">
              5★
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Service Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
