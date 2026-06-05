"use client"

import { useEffect, useState } from "react"

interface AnimatedTourAvatarProps {
  isTalking?: boolean
}

export function AnimatedTourAvatar({ isTalking = true }: AnimatedTourAvatarProps) {
  const [isBlinking, setIsBlinking] = useState(false)

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 200)
    }, 3000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="relative">
      {/* Floating animation wrapper */}
      <div className="animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl animate-pulse opacity-60" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 blur-xl animate-pulse opacity-40 animation-delay-500" />

        <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/50">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="33%" stopColor="#a78bfa" />
                  <stop offset="66%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>

              {/* Face background */}
              <circle cx="100" cy="100" r="80" fill="url(#faceGradient)" />

              <circle cx="100" cy="90" r="45" fill="url(#headGradient)" />

              {/* Eyes */}
              <g className={isBlinking ? "opacity-0" : "opacity-100 transition-opacity duration-100"}>
                <ellipse cx="85" cy="85" rx="6" ry="8" fill="#ffffff" />
                <ellipse cx="115" cy="85" rx="6" ry="8" fill="#ffffff" />
                <circle cx="85" cy="87" r="3" fill="#1e293b" className="animate-eye-move" />
                <circle cx="115" cy="87" r="3" fill="#1e293b" className="animate-eye-move" />
                {/* Eye shine */}
                <circle cx="86" cy="86" r="1.5" fill="#ffffff" opacity="0.8" />
                <circle cx="116" cy="86" r="1.5" fill="#ffffff" opacity="0.8" />
              </g>

              {/* Blinking eyes (horizontal lines) */}
              <g className={isBlinking ? "opacity-100" : "opacity-0 transition-opacity duration-100"}>
                <line x1="79" y1="85" x2="91" y2="85" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="109" y1="85" x2="121" y2="85" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* Smile with talking animation */}
              <path
                d="M 80 105 Q 100 115 120 105"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                className={isTalking ? "animate-mouth-talk" : ""}
              />

              {/* Eyebrows */}
              <path d="M 78 75 Q 85 72 92 75" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 108 75 Q 115 72 122 75" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

              {isTalking && (
                <g className="animate-wave">
                  <circle cx="145" cy="70" r="3" fill="#22d3ee" opacity="0.8" />
                  <circle cx="155" cy="65" r="2.5" fill="#a78bfa" opacity="0.7" className="animate-wave-delay-1" />
                  <circle cx="165" cy="70" r="2" fill="#f472b6" opacity="0.6" className="animate-wave-delay-2" />
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-cyan-400/60 animate-particle-1 shadow-lg shadow-cyan-400/50" />
        <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-purple-500/60 animate-particle-2 shadow-lg shadow-purple-500/50" />
        <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-pink-500/60 animate-particle-3 shadow-lg shadow-pink-500/50" />
        <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-yellow-400/60 animate-particle-1 shadow-lg shadow-yellow-400/50" />
        <div className="absolute top-1/2 left-0 h-1 w-1 rounded-full bg-orange-400/60 animate-particle-2 shadow-lg shadow-orange-400/50" />
      </div>
    </div>
  )
}
