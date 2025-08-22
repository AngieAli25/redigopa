'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-redigopa.jpg')`
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>



      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/logo-redigopa.png" 
              alt="RedigoPA Logo" 
              className="mx-auto h-16 md:h-20 w-auto"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-hero-mobile md:text-hero-desktop text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Basta Perdere Ore con la{' '}
            <span className="text-brand-secondary">Burocrazia Scolastica</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            La prima piattaforma di gestione documentale per la scuola che semplifica 
            la gestione di atti amministrativi, appalti e progetti finanziati (PNRR, PON, FESR...).
          </motion.p>

          {/* CTA Button - Centered and optimized */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              className="btn-primary group text-lg px-12 py-5 whitespace-nowrap"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              PROVA GRATIS 30 GIORNI
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Benefits - Positioned below CTA button */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap text-white text-opacity-80 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <img src="/check-icon.svg" alt="Check" className="w-4 h-4" />
                Accesso illimitato
              </span>
              <span className="hidden sm:inline text-white text-opacity-40">•</span>
              <span className="flex items-center gap-2">
                <img src="/check-icon.svg" alt="Check" className="w-4 h-4" />
                20 documenti inclusi
              </span>
              <span className="hidden sm:inline text-white text-opacity-40">•</span>
              <span className="flex items-center gap-2">
                <img src="/check-icon.svg" alt="Check" className="w-4 h-4" />
                Cancellabile in qualsiasi momento
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection 