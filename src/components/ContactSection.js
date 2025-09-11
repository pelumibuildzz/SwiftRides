"use client";
import Link from "next/link";
import scrollToSection from "@/utils";
import {
  Phone,
  Clock,
  Shield,
  RefreshCw,
  HeadphonesIcon,
  Send,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+234 (0) 905 632 6737",
      action: "tel:+2349056326737",
      color: "from-primary to-primary/80",
      available: "24/7 Available",
    },
    {
      icon: (
        <Image src={"/Instagram.svg"} height={24} width={24} alt="Instagram" />
      ),
      title: "Instagram",
      description: "DM us on Instagram for any inquiries",
      contact: "@swiftrides_",
      action: "https://instagram.com/swiftrides_",
      color: "from-accent to-accent/80",
      available: "Response to all your queries",
    },
    {
      icon: <Image src={"/X.svg"} height={24} width={24} alt="X" />,
      title: "X",
      description: "Check us on X for updates and support",
      contact: "@swiftrides1",
      action: "https://X.com/SWIFTRIDE1",
      color: "from-success to-success/80",
      available: "For Updates and Info",
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Telegram",
      description: "Quick chat for instant support",
      contact: "+234 (0) 912 252 2497",
      action: "https://t.me/+2349122522497",
      color: "from-primary/60 to-accent/60",
      available: "All week, 9AM-6PM",
    },
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Refund Guarantee",
      description:
        "If we fail to deliver on any of our promises, you get a full refund - no questions asked.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Promise",
      description:
        "We guarantee your ride will be ready at the scheduled time.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Service Assurance",
      description: "Safe vehicles and professional drivers.",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-background relative overflow-hidden lg:py-32"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-bl from-primary/5 to-accent/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-gradient-to-tr from-success/5 to-primary/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            💬 Get in Touch
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Contact Swift Rides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:text-xl">
            Need help or have questions? We&apos;re here to assist you 24/7. Reach
            out through any of these channels.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <Link
                href={method.action}
                className="block h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="font-semibold text-primary text-sm mb-2">
                  {method.contact}
                </p>
                <p className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full inline-block">
                  {method.available}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Refund Guarantee Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success mb-4">
              ✅ Our Guarantee
            </div>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
              Your Peace of Mind Matters
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand behind our service with a comprehensive refund policy.
              Your satisfaction is our priority.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6 group-hover:bg-success/20 transition-colors duration-300">
                  {guarantee.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {guarantee.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>

          {/* Refund Policy CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-success/5 to-primary/5 p-6 border border-success/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <HeadphonesIcon className="h-6 w-6 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  Have concerns about our service?
                </p>
                <p className="text-sm text-gray-600">
                  Contact us within 24 hours for a full refund
                </p>
              </div>
              <Link
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#register");
                }}
                className="ml-auto inline-flex items-center rounded-lg bg-success px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-success/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Response Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-2xl font-bold text-primary lg:text-3xl">
              &lt;2h
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Email Response
            </div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-2xl font-bold text-accent lg:text-3xl">
              24/7
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Phone Support
            </div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-2xl font-bold text-success lg:text-3xl">
              100%
            </div>
            <div className="text-sm text-gray-600 font-medium">Refund Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-2xl font-bold text-primary lg:text-3xl">
              5★
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Support Rating
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary to-accent p-4 text-white shadow-lg">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Emergency? Call us directly:</span>
            <Link
              href="tel:+2349056326737"
              className="font-bold underline hover:no-underline"
            >
              +234 (0) 905 632 6737
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
