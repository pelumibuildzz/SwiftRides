"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeAnimation({ onComplete }) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationStep, setAnimationStep] = useState("start");

  const punchline = "Getting Students Home, Swift & Safe.";
  const punchlineWords = punchline.split(" ");

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Show outline text (0.2s delay)
      setTimeout(() => setAnimationStep("outline"), 200);

      // Step 2: Fill text and scale (after 1.4s)
      setTimeout(() => setAnimationStep("filled"), 1400);

      // Step 3: Show punchline (after 2.4s)
      setTimeout(() => setAnimationStep("punchline"), 2400);

      // Step 4: Hide punchline (after 3.8s)
      setTimeout(() => setAnimationStep("hidePunchline"), 3800);

      // Step 5: Split and hide Swift Rides + start overlay fade (after 4s)
      setTimeout(() => setAnimationStep("split"), 4000);

      // Step 6: Begin overlay dissolution (after 4.2s)
      setTimeout(() => setAnimationStep("dissolve"), 4200);

      // Step 7: Complete animation (after 6s)
      setTimeout(() => {
        setShowAnimation(false);
        onComplete?.();
      }, 6000);
    };

    sequence();
  }, [onComplete]);

  const titleVariants = {
    start: {
      opacity: 0,
      scale: 0.8,
    },
    outline: {
      opacity: 1,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    filled: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    split: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const swiftVariants = {
    split: {
      x: -200,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const ridesVariants = {
    split: {
      x: 200,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const punchlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    dissolve: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          variants={overlayVariants}
          initial="visible"
          animate={animationStep === "dissolve" ? "dissolve" : "visible"}
          exit="exit"
        >
          {/* Main Content Container */}
          <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
            {/* Swift Rides Title */}
            <div className="relative mb-8 lg:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
                {/* Swift Word */}
                <motion.h1
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold ${
                    animationStep === "start" || animationStep === "outline"
                      ? "text-transparent"
                      : "text-primary"
                  } ${
                    animationStep === "start" || animationStep === "outline"
                      ? "stroke-primary stroke-2"
                      : ""
                  }`}
                  style={{
                    WebkitTextStroke:
                      animationStep === "start" || animationStep === "outline"
                        ? "2px #FF5722"
                        : "none",
                  }}
                  variants={
                    animationStep === "split" ? swiftVariants : titleVariants
                  }
                  initial="start"
                  animate={animationStep === "split" ? "split" : animationStep}
                >
                  Swift
                </motion.h1>

                {/* Rides Word */}
                <motion.h1
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold ${
                    animationStep === "start" || animationStep === "outline"
                      ? "text-transparent"
                      : "text-accent"
                  } ${
                    animationStep === "start" || animationStep === "outline"
                      ? "stroke-accent stroke-2"
                      : ""
                  }`}
                  style={{
                    WebkitTextStroke:
                      animationStep === "start" || animationStep === "outline"
                        ? "2px #FFC107"
                        : "none",
                  }}
                  variants={
                    animationStep === "split" ? ridesVariants : titleVariants
                  }
                  initial="start"
                  animate={animationStep === "split" ? "split" : animationStep}
                  transition={{ delay: 0.3 }}
                >
                  Rides
                </motion.h1>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  animationStep === "filled"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 0.5, duration: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-accent/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  animationStep === "filled"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 0.7, duration: 0.4 }}
              />
            </div>

            {/* Punchline Animation */}
            <AnimatePresence>
              {(animationStep === "punchline" ||
                animationStep === "hidePunchline") && (
                <motion.div
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl"
                  variants={punchlineVariants}
                  initial="hidden"
                  animate={
                    animationStep === "hidePunchline" ? "exit" : "visible"
                  }
                  exit="exit"
                >
                  {punchlineWords.map((word, index) => (
                    <motion.span
                      key={index}
                      className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: animationStep === "hidePunchline" ? 0 : 1,
                        y: animationStep === "hidePunchline" ? -20 : 0,
                      }}
                      transition={{
                        delay:
                          animationStep === "hidePunchline"
                            ? (punchlineWords.length - index) * 0.1
                            : index * 0.15,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl" />
            <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-gradient-to-tl from-accent to-success blur-2xl" />
            <div className="absolute top-1/2 left-10 h-20 w-20 rounded-full bg-gradient-to-r from-success to-primary blur-2xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
