"use client";

import { useState, useEffect } from "react";
import { Car, PlaneTakeoff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VehicleAnimation() {
  const [currentVehicle, setCurrentVehicle] = useState("plane");
  const [vehiclePosition, setVehiclePosition] = useState("entering");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const animationSequence = () => {
      // Vehicle enters from left (2s)
      setVehiclePosition("entering");

      setTimeout(() => {
        // Vehicle reaches center (0.5s transition)
        setVehiclePosition("center");
      }, 1000);

      setTimeout(() => {
        // Message appears (after 0.5s in center)
        setShowMessage(true);
      }, 1500);

      setTimeout(() => {
        // Message disappears and vehicle exits (after 3s in center)
        setShowMessage(false);
        setVehiclePosition("exiting");
      }, 4500);

      setTimeout(() => {
        // Switch to next vehicle and reset (after 1s exit time)
        setCurrentVehicle((prev) => (prev === "plane" ? "car" : "plane"));
        setVehiclePosition("entering");
      }, 5500);
    };

    const interval = setInterval(animationSequence, 6000);
    animationSequence(); // Start immediately

    return () => clearInterval(interval);
  }, []);

  const vehicleVariants = {
    entering: {
      x: -150,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exiting: {
      x: 150,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const trailVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        pathLength: { duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
      {/* Animated Vehicle */}
      <div className="relative w-full h-64 flex items-center justify-center">
        <motion.div
          className="relative flex flex-col items-center justify-center"
          variants={vehicleVariants}
          animate={vehiclePosition}
          initial="entering"
        >
          {/* Vehicle Icon */}
          {currentVehicle === "plane" ? (
            <div className="relative">
              <motion.div
                className="text-primary"
                animate={{
                  rotate: vehiclePosition === "center" ? [0, 2, -2, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: vehiclePosition === "center" ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <PlaneTakeoff className="h-16 w-16 lg:h-20 lg:w-20" />
              </motion.div>

              {/* Plane Trails */}
              <svg
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-12 h-8"
                viewBox="0 0 48 32"
              >
                <motion.path
                  d="M0 16 Q12 12 24 16 Q36 20 48 16"
                  stroke="#FF5722"
                  strokeWidth="2"
                  fill="none"
                  variants={trailVariants}
                  animate={
                    vehiclePosition === "center" ||
                    vehiclePosition === "entering"
                      ? "visible"
                      : "hidden"
                  }
                />
                <motion.path
                  d="M0 20 Q12 16 24 20 Q36 24 48 20"
                  stroke="#FF5722"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.5"
                  variants={trailVariants}
                  animate={
                    vehiclePosition === "center" ||
                    vehiclePosition === "entering"
                      ? "visible"
                      : "hidden"
                  }
                />
              </svg>
            </div>
          ) : (
            <div className="relative">
              <motion.div
                className="text-accent"
                animate={{
                  y: vehiclePosition === "center" ? [0, -2, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: vehiclePosition === "center" ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <Car className="h-16 w-16 lg:h-20 lg:w-20" />
              </motion.div>

              {/* Car Speed Lines */}
              <svg
                className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-6"
                viewBox="0 0 32 24"
              >
                <motion.line
                  x1="0"
                  y1="8"
                  x2="24"
                  y2="8"
                  stroke="#FFC107"
                  strokeWidth="2"
                  variants={trailVariants}
                  animate={
                    vehiclePosition === "center" ||
                    vehiclePosition === "entering"
                      ? "visible"
                      : "hidden"
                  }
                />
                <motion.line
                  x1="0"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="#FFC107"
                  strokeWidth="1.5"
                  opacity="0.7"
                  variants={trailVariants}
                  animate={
                    vehiclePosition === "center" ||
                    vehiclePosition === "entering"
                      ? "visible"
                      : "hidden"
                  }
                />
                <motion.line
                  x1="0"
                  y1="16"
                  x2="16"
                  y2="16"
                  stroke="#FFC107"
                  strokeWidth="1"
                  opacity="0.5"
                  variants={trailVariants}
                  animate={
                    vehiclePosition === "center" ||
                    vehiclePosition === "entering"
                      ? "visible"
                      : "hidden"
                  }
                />
              </svg>
            </div>
          )}
        </motion.div>

        {/* Animated Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
                <p className="text-sm lg:text-base font-medium text-gray-800 text-center whitespace-nowrap">
                  {currentVehicle === "plane"
                    ? "Landed? We're ready for you! ✈️"
                    : "Swift rides, safe arrival 🚗"}
                </p>
              </div>
              {/* Message Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 right-4">
          <div className="flex space-x-1">
            <motion.div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentVehicle === "plane" ? "bg-primary" : "bg-gray-300"
              }`}
              animate={{
                scale: currentVehicle === "plane" ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: currentVehicle === "plane" ? Infinity : 0,
              }}
            />
            <motion.div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentVehicle === "car" ? "bg-accent" : "bg-gray-300"
              }`}
              animate={{
                scale: currentVehicle === "car" ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: currentVehicle === "car" ? Infinity : 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-accent/20"></div>
      <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-primary/20"></div>
    </div>
  );
}
