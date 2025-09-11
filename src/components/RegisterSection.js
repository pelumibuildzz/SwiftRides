"use client";

import { useState } from "react";
import {
  User,
  Calendar,
  Clock,
  Phone,
  Package,
  Send,
  CheckCircle,
  Shield,
  GraduationCap,
  Home,
  Hash,
  Mail,
} from "lucide-react";

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: "",
    matricNumber: "",
    level: "",
    hallOfResidence: "",
    arrivalDate: "",
    time: "",
    phoneNumber: "",
    email: "",
    numberOfBoxes: "1",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/submit-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Registration submitted successfully:", result);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            matricNumber: "",
            level: "",
            hallOfResidence: "",
            arrivalDate: "",
            time: "",
            phoneNumber: "",
            email: "",
            numberOfBoxes: "1",
          });
        }, 3000);
      } else {
        throw new Error(result.error || "Failed to submit registration");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      setSubmitError(error.message);
    } finally {
      setIsLoading(false);
    }
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
            Fill out the form below and we&apos;ll arrange your comfortable ride
            from Lagos Airport to Covenant University.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-12">
          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
                <div className="ml-auto pl-3">
                  <button
                    onClick={() => setSubmitError(null)}
                    className="inline-flex text-red-400 hover:text-red-600"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name and Matric Number */}
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

              {/* Matric Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="matricNumber"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Hash className="h-4 w-4 text-primary" />
                  Matric Number
                </label>
                <input
                  type="text"
                  id="matricNumber"
                  name="matricNumber"
                  value={formData.matricNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 21CU123456"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Row 2: Level and Hall of Residence */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Level Field */}
              <div className="space-y-2">
                <label
                  htmlFor="level"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Level
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select your level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>
                </select>
              </div>

              {/* Hall of Residence Field */}
              <div className="space-y-2">
                <label
                  htmlFor="hallOfResidence"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Home className="h-4 w-4 text-primary" />
                  Hall of Residence
                </label>
                <select
                  id="hallOfResidence"
                  name="hallOfResidence"
                  value={formData.hallOfResidence}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select your hall</option>
                  <option value="Daniel Hall">Daniel Hall</option>
                  <option value="Peter Hall">Peter Hall</option>
                  <option value="John Hall">John Hall</option>
                  <option value="Joseph Hall">Joseph Hall</option>
                  <option value="Paul Hall">Paul Hall</option>
                  <option value="Esther Hall">Esther Hall</option>
                  <option value="Deborah Hall">Deborah Hall</option>
                  <option value="Dorcas Hall">Dorcas Hall</option>
                  <option value="Mary Hall">Mary Hall</option>
                  <option value="Lydia Hall">Lydia Hall</option>
                </select>
              </div>
            </div>

            {/* Row 3: Phone Number and Luggage */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Phone Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Telegram Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="09034567890"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="student@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Row 4: Number of Boxes */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Number of Boxes */}
              <div className="space-y-2">
                <label
                  htmlFor="numberOfBoxes"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Package className="h-4 w-4 text-primary" />
                  Number of Boxes
                </label>
                <select
                  id="numberOfBoxes"
                  name="numberOfBoxes"
                  value={formData.numberOfBoxes}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="1">1 box</option>
                  <option value="2">2 boxes</option>
                  <option value="3">3 boxes</option>
                  <option value="4">4 boxes</option>
                  <option value="5">5+ boxes</option>
                </select>
              </div>

              {/* Empty space to maintain grid layout */}
              <div></div>
            </div>

            {/* Row 5: Arrival Date and Time */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Arrival Date Field */}
              <div className="space-y-2">
                <label
                  htmlFor="arrivalDate"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  Arrival Date
                </label>
                <select
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select arrival date</option>
                  <option value="2025-09-27">Friday, September 27, 2025</option>
                  <option value="2025-09-28">
                    Saturday, September 28, 2025
                  </option>
                </select>
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

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting Registration...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Register for Swift Rides
                  </>
                )}
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
              We&apos;ll contact you within 2 hours
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
              100% refund if we don&apos;t deliver
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
