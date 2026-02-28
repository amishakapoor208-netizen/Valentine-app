"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

const confettiColors = [
  "#ff1493",
  "#ff69b4",
  "#ffa500",
  "#00d4ff",
  "#e9a8ff",
  "#ffd166"
];

export default function GiftBoxScreen({ onNext }) {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenGift = () => {
    setIsOpened(true)
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: confettiColors,
    })
    // Navigate to next screen after animation
    setTimeout(() => {
      onNext()
    }, 1500)
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Instruction Text */}
        {!isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              🎁 You have a gift! 🎁
            </h1>
            <p className="text-lg text-white/70">
              Click on the gift box to open it
            </p>
          </motion.div>
        )}

        {/* Gift Box */}
        <motion.div
          onClick={handleOpenGift}
          animate={
            !isOpened
              ? {
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }
              : {
                  scale: 0.5,
                  opacity: 0,
                  rotateZ: 180,
                }
          }
          transition={
            !isOpened
              ? {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }
              : {
                  duration: 0.8,
                }
          }
          className={`cursor-pointer select-none ${!isOpened ? "hover:scale-110" : ""}`}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Gift Box Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl border-4 border-red-800" />

            {/* Ribbon - Horizontal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-12 bg-yellow-300 opacity-90 shadow-lg" />
            </div>

            {/* Ribbon - Vertical */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-full bg-yellow-300 opacity-90 shadow-lg" />
            </div>

            {/* Bow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 pointer-events-none">
              <div className="relative w-20 h-12">
                {/* Left bow loop */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-2 border-yellow-500" />
                {/* Right bow loop */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-2 border-yellow-500" />
                {/* Center knot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-md" />
              </div>
            </div>

            {/* Sheen effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />
          </div>
        </motion.div>

        {/* Opening animation effect */}
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-2xl text-white font-bold">Opening...</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
