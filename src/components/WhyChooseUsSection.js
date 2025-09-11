"use client";

import {
  DollarSign,
  Car,
  Snowflake,
  Shield,
  GraduationCap,
  Clock,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Affordable Rides",
      description:
        "Student-friendly pricing that won't break your budget. Quality transportation at rates you can afford.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: GraduationCap,
      title: "School Authorized",
      description:
        "Officially recognized by Covenant University. A trusted transportation partner for students.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Car,
      title: "Riding in Comfort",
      description:
        "Premium vehicles with comfortable seating to make your journey from airport to campus relaxing.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Snowflake,
      title: "Full AC",
      description:
        "Beat the heat with fully air-conditioned vehicles ensuring a cool, comfortable ride every time.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: Shield,
      title: "Very Safe",
      description:
        "Verified drivers, tracked vehicles, and comprehensive safety protocols for your peace of mind.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: Clock,
      title: "Convenience",
      description:
        "24/7 availability with flexible pickup times. We adapt to your schedule, not the other way around.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Globe,
      title: "Easy Website Registration",
      description:
        "Quick and simple online booking process. Register, book, and track your ride all from our website.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              ✨ Why Students Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Why Ride with <span className="text-primary">Swift Rides?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-xl">
            We're not just another ride service. We're your trusted partner in
            getting back to campus safely, comfortably, and affordably. Here's
            what makes us the top choice for Covenant University students.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border-2 ${advantage.borderColor} ${advantage.bgColor} p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComponent className={`h-6 w-6 ${advantage.color}`} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover Effect Decoration */}
                <div
                  className={`absolute -top-1 -right-1 h-6 w-6 rounded-full ${advantage.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                >
                  <CheckCircle className={`h-6 w-6 ${advantage.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-accent p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-4 lg:text-3xl">
              Ready to Experience the Difference?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Join thousands of satisfied Covenant University students who trust
              Swift Rides for their airport transfers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <button
                onClick={() => {
                  const element = document.querySelector("#register");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1"
              >
                Book Your Ride Now
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#how-it-works");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-primary"
              >
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-accent/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-primary/5 blur-lg"></div>
    </section>
  );
}
