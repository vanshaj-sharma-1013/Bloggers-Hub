"use client"

import type React from "react"
import { useState } from "react"
import { Mail, ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-colors">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Never Miss an Insight
            </h2>

            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our weekly newsletter and get the latest insights delivered directly to your inbox. Curated
              content from our expert team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Done!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="text-slate-500 text-sm mt-6">No spam. Unsubscribe anytime in one click.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
