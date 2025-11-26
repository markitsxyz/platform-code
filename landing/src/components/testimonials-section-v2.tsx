"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Developer",
    content: "markits transformed how we launch tokens. What used to take days now takes minutes. The platform is incredibly intuitive and powerful.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    content: "As a non-technical founder, markits gave me the ability to launch my token without hiring developers. It's a game changer for entrepreneurs.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Mike Rodriguez",
    role: "Crypto Investor",
    content: "The simplicity and affordability of markits is unmatched. I've created multiple tokens for different projects, all within minutes.",
    rating: 5,
    avatar: "MR",
  },
]

export function TestimonialsSectionV2() {
  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by{' '}
            <span className="text-primary">Hundreds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the growing community of successful token creators
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto blur-sm">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 glass hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-foreground font-bold mr-3 shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center blur-sm"
        >
          <div className="inline-flex items-center justify-center space-x-12">
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Tokens Created</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
