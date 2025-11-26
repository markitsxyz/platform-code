"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NFTPassSectionV2 } from "@/components/nft-pass-section-v2"
import { 
  Check, 
  Star, 
  Crown,
  Sparkles,
  ArrowRight,
  X
} from "lucide-react"

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    currency: "SOL",
    period: "forever",
    description: "Coming soon - Early access for Platform Pass holders",
    features: [
      "Create up to 3 tokens",
      "Basic token management",
      "Community support"
    ],
    cta: "Coming Soon",
    variant: "outline" as const,
    popular: false,
    disabled: true
  },
  {
    name: "Platform Pass",
    price: "39",
    currency: "USDC",
    period: "lifetime",
    description: "Ultimate access with exclusive NFT",
    features: [
      "Create unlimited tokens",
      "Exclusive NFT Pass",
      "Lowest fees forever (0.05 SOL/token)",
      "Priority processing & VIP support",
      "Early access to all features"
    ],
    cta: "Get NFT Pass",
    variant: "gradient" as const,
    popular: true,
    nftPass: true
  }
]

export function PricingNFTSection() {
  const [showNFTMint, setShowNFTMint] = useState(false)

  return (
    <>
      <section id="pricing" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/30">
              Pricing
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Start{' '}
              <span className="text-primary">Free</span>, Scale{' '}
              <span className="text-primary">Smart</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try for free, pay only when you need more. No hidden fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <Badge variant="gradient" className="px-4 py-1.5 text-xs font-semibold shadow-lg">
                      <Star className="w-3.5 h-3.5 mr-1.5" />
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <Card className={`relative h-full transition-all duration-500 ${
                  plan.disabled 
                    ? 'opacity-60 cursor-not-allowed border-border/50' 
                    : plan.popular 
                      ? 'border-2 border-primary/50 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-sm' 
                      : 'border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'
                }`}>
                  
                  {plan.nftPass && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-[#FFA500] rounded-xl flex items-center justify-center shadow-lg">
                        <Crown className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4 pt-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl font-bold mb-1">{plan.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground">{plan.currency}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{plan.period}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.variant}
                      size="lg"
                      className="w-full group font-semibold h-11 mt-6"
                      disabled={plan.disabled}
                      onClick={() => {
                        if (plan.disabled) return
                        if (plan.nftPass) {
                          setShowNFTMint(true)
                        } else {
                          window.open('https://app.markits.xyz', '_blank')
                        }
                      }}
                    >
                      {plan.nftPass && <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />}
                      {plan.cta}
                      {!plan.disabled && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showNFTMint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowNFTMint(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={() => setShowNFTMint(false)}
              >
                <X className="w-4 h-4" />
              </Button>
              <NFTPassSectionV2 />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
