"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { RotateCcw } from "lucide-react"
import Button from "../Button"

const confettiColors = [
  "#ff1493",
  "#ff69b4",
  "#ffa500",
  "#00d4ff",
  "#e9a8ff",
  "#ffd166"
];

export default function FinalScreen({ onNext }) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Trigger confetti when component mounts
    const timer = setTimeout(() => {
      setShowContent(true)
      burst()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const burst = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.3 },
      colors: confettiColors,
    })
  }

  const handleReplay = () => {
    onNext()
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Bunting Decoration at Top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
        <svg viewBox="0 0 600 160" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Decorative outer curved lines */}
          <path
            d="M 15 50 Q 50 15 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 585 50"
            stroke="#a855a8"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Main curved garland line */}
          <path
            d="M 15 70 Q 50 30 100 70 T 200 70 T 300 70 T 400 70 T 500 70 T 585 70"
            stroke="#d946a6"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Primary bunting flags */}
          {[70, 140, 210, 280, 350, 420, 490].map((x, i) => (
            <polygon
              key={`large-flag-${i}`}
              points={`${x},82 ${x + 20},82 ${x + 26},95 ${x + 13},125 ${x - 6},95`}
              fill={["#ff1493", "#ffa500", "#00d4ff", "#ff69b4", "#ff1493", "#ffa500", "#00d4ff"][i % 7]}
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"
            />
          ))}
          
          {/* Secondary flags */}
          {[105, 175, 245, 315, 385, 455, 525].map((x, i) => (
            <polygon
              key={`small-flag-${i}`}
              points={`${x},78 ${x + 14},78 ${x + 18},88 ${x + 9},110 ${x - 4},88`}
              fill={["#ffa500", "#00d4ff", "#ff69b4", "#ff1493", "#ffa500", "#00d4ff", "#ff69b4"][i % 7]}
              filter="drop-shadow(0 3px 6px rgba(0,0,0,0.3))"
              opacity="0.95"
            />
          ))}
        </svg>
      </div>

      {/* Main Card Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-sm"
        >
          <div className="bg-[#fff8fc] rounded-3xl p-8 shadow-2xl border-2 border-purple-200 relative overflow-hidden">
            {/* Decorative particles background */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  initial={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    opacity: 0
                  }}
                  animate={{
                    y: [0, -50, -100],
                    opacity: [0.5, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              {/* Character */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl"
              >
                🐼
              </motion.div>

              {/* Heart */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl"
              >
                ❤️
              </motion.div>

              {/* Main Message */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-secondary drop-shadow-lg">
                  Lots of love for you ❤️
                </h1>

                <p className="text-lg text-secondary/80 leading-relaxed font-light">
                  Once again, Happy Birthday! Hope you loved your surprise.
                </p>
              </div>

              {/* Replay Button */}
              <motion.button
                onClick={handleReplay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-8 py-3 bg-[#ffccd3] text-secondary rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <RotateCcw size={20} />
                Replay
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
