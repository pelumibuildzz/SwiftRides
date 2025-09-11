"use client";

import { X } from "lucide-react";
import Image from "next/image";

export default function FlyerModal({ flyer, onClose, onBookNow }) {
  if (!flyer) return null;

  const handleBookNow = () => {
    onClose(); // Close the modal first
    onBookNow(); // Then scroll to register
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Modal content */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {flyer.title}
          </h3>
          <p className="text-sm text-gray-600">
            Click and drag to zoom • Right-click to save
          </p>
        </div>

        {/* Large flyer image */}
        <div className="flex items-center justify-center">
          <Image
            src={flyer.src}
            alt={flyer.alt}
            width={800}
            height={600}
            className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className={`hidden flex-col items-center justify-center min-h-[400px] w-full bg-gradient-to-br ${flyer.bgGradient} rounded-xl`}
          >
            <div className={`text-6xl font-bold ${flyer.textColor} mb-2`}>
              {flyer.fallback.text}
            </div>
            <div className={`text-2xl ${flyer.textColor}`}>
              {flyer.fallback.subtext}
            </div>
            <div className="mt-4 text-gray-600">Image not available</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={handleBookNow}
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Book Now
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
