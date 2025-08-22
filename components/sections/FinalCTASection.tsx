'use client'

import React from 'react'
import { motion } from 'framer-motion'


const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark py-20 relative overflow-hidden">


      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h2 
            className="text-h2-mobile md:text-h2-desktop text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trasforma la burocrazia scolastica in un{' '}
            <span className="text-brand-secondary">processo efficiente</span>
          </motion.h2>

          {/* Urgency Text */}
          <motion.p 
            className="text-lg md:text-xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unisciti a oltre <strong>500 scuole</strong> che hanno già rivoluzionato la loro gestione amministrativa. 
            Il costo di un errore burocratico può essere molto più alto dell'investimento in RedigoPA.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="btn-primary bg-brand-secondary hover:bg-brand-secondary-dark text-white text-lg px-12 py-5 whitespace-nowrap"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              PROVA GRATIS 30 GIORNI
            </button>
          </motion.div>



          {/* Final Trust Indicator */}
          <motion.div 
            className="pt-8 border-t border-white border-opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white text-opacity-70 text-sm mb-4">
              Oltre 50.000 documenti già generati con successo
            </p>
            <div className="flex justify-center items-center space-x-6 text-white text-opacity-60 text-sm">
              <span>powered by meravigliä</span>
              <div className="hidden sm:block w-px h-4 bg-white bg-opacity-30" />
              <a href="#" className="hover:text-white transition-colors">privacy policy</a>
              <div className="hidden sm:block w-px h-4 bg-white bg-opacity-30" />
              <a href="#" className="hover:text-white transition-colors">cookie policy</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection 