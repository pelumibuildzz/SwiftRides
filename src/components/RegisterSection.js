"use client";

import { useState } from "react";
import {
  User,
  Calendar,
  Clock,
  Phone,
  Luggage,
  Users,
  UserCheck,
  Send,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    phoneNumber: "",
    luggageBags: "1",
    ridePreference: "shared",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        date: "",
        time: "",
        phoneNumber: "",
        luggageBags: "1",
        ridePreference: "shared",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section
        id="register"
        className="py-20 px-6 bg-white relative overflow-hidden lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center bg-gradient-to-br from-success/5 to-primary/5 rounded-3xl p-12 border border-success/20">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing Swift Rides! Our team will contact you
              within 2 hours to confirm your booking and arrange payment.
            </p>
            <div className="text-sm text-gray-500">
              Redirecting to form in 3 seconds...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="py-20 px-6 bg-white relative overflow-hidden lg:py-32"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-gradient-to-tl from-accent/5 to-success/5 blur-3xl"></div>

      <div className="mx-auto max-w-4xl relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            🚀 Book Your Ride
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Register for Swift Rides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:text-xl">
            Fill out the form below and we'll arrange your comfortable ride from
            Lagos Airport to Covenant University.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name and Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <User className="h-4 w-4 text-primary" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="+234 (0) 123 456 7890"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Row 2: Date and Time */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Date Field */}
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  Arrival Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Time Field */}
              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Clock className="h-4 w-4 text-primary" />
                  Arrival Time at Lagos Airport
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Row 3: Luggage and Ride Preference */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Luggage Bags */}
              <div className="space-y-2">
                <label
                  htmlFor="luggageBags"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Luggage className="h-4 w-4 text-primary" />
                  Number of Luggage Bags
                </label>
                <select
                  id="luggageBags"
                  name="luggageBags"
                  value={formData.luggageBags}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="1">1 bag</option>
                  <option value="2">2 bags</option>
                  <option value="3">3 bags</option>
                  <option value="4">4 bags</option>
                  <option value="5">5+ bags</option>
                </select>
              </div>

              {/* Ride Preference */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Users className="h-4 w-4 text-primary" />
                  Ride Preference
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="ridePreference"
                      value="shared"
                      checked={formData.ridePreference === "shared"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary/20"
                    />
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-gray-900">
                        Shared ride (More affordable)
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="ridePreference"
                      value="private"
                      checked={formData.ridePreference === "private"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary/20"
                    />
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-primary" />
                      <span className="text-gray-900">
                        Private ride (Just for you)
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              >
                <Send className="mr-2 h-5 w-5" />
                Register for Swift Rides
              </button>
            </div>

            {/* Form Footer */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                By registering, you agree to our terms of service. Our team will
                contact you within 2 hours to confirm your booking.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="text-center bg-primary/5 rounded-xl p-6 border border-primary/10">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-sm text-gray-600">
              We'll contact you within 2 hours
            </p>
          </div>
          <div className="text-center bg-accent/5 rounded-xl p-6 border border-accent/10">
            <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Secure Booking</h4>
            <p className="text-sm text-gray-600">
              Your information is safe with us
            </p>
          </div>
          <div className="text-center bg-success/5 rounded-xl p-6 border border-success/10">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Guaranteed Service
            </h4>
            <p className="text-sm text-gray-600">
              100% refund if we don't deliver
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
