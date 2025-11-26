"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, ArrowRight, TrendingUp, Zap, BarChart3, Coins, Activity } from "lucide-react"
import { useEffect } from "react"

export function HeroSectionV2() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX - innerWidth / 2) * 0.1)
      mouseY.set((e.clientY - innerHeight / 2) * 0.1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          style={{
            x: useTransform(x, (value) => value * 0.5),
            y: useTransform(y, (value) => value * 0.5),
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"
          style={{
            x: useTransform(x, (value) => -value * 0.3),
            y: useTransform(y, (value) => -value * 0.3),
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
          style={{
            x: useTransform(x, (value) => value * 0.2),
            y: useTransform(y, (value) => value * 0.2),
          }}
        />
      </div>

      {/* Animated trading chart visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF006E" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF006E" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF006E" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated price line */}
          <motion.path
            d="M0,300 Q200,250 400,280 T800,260 T1200,240 L1200,400 L0,400 Z"
            fill="url(#chartGradient1)"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              d: [
                "M0,300 Q200,250 400,280 T800,260 T1200,240 L1200,400 L0,400 Z",
                "M0,280 Q200,230 400,260 T800,240 T1200,220 L1200,400 L0,400 Z",
                "M0,300 Q200,250 400,280 T800,260 T1200,240 L1200,400 L0,400 Z",
              ]
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              d: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M0,320 Q200,270 400,300 T800,280 T1200,260 L1200,400 L0,400 Z"
            fill="url(#chartGradient2)"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              d: [
                "M0,320 Q200,270 400,300 T800,280 T1200,260 L1200,400 L0,400 Z",
                "M0,300 Q200,250 400,280 T800,260 T1200,240 L1200,400 L0,400 Z",
                "M0,320 Q200,270 400,300 T800,280 T1200,260 L1200,400 L0,400 Z",
              ]
            }}
            transition={{ 
              pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
              d: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0,217,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0,217,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="text-center max-w-5xl space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Badge variant="outline" className="px-6 py-2.5 text-sm font-medium border-primary/50 bg-primary/10 backdrop-blur-sm hover:bg-primary/15 transition-colors">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                markits.xyz • Market Making Platform
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                Move Markets,
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Build Futures
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                The complete Solana DeFi platform. Create tokens, launch markets, and manage liquidity with advanced market making tools built for traders and builders.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                size="xl"
                variant="gradient"
                className="group text-lg px-10 py-7 h-auto font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://app.markits.xyz', '_blank')}
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Launch Platform
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="text-lg px-10 py-7 h-auto font-semibold border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Quick Stats with improved design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto"
            >
              {[
                { value: "1K+", label: "Tokens", icon: Coins, color: "from-primary/20 to-primary/10" },
                { value: "$100K+", label: "Volume", icon: BarChart3, color: "from-primary/20 to-primary/10" },
                { value: "15+", label: "Tools", icon: Zap, color: "from-primary/20 to-primary/10" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Live activity indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-2 pt-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-sm text-muted-foreground">Live market data</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
