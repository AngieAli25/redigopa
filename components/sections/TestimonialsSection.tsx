'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

const testimonials = [
  {
    rating: 5,
    text: "Prima impiegavo un'intera giornata per preparare la documentazione di un progetto PON. Con RedigoPA lo faccio in 30 minuti durante la pausa caffè. È incredibile!"
  },
  {
    rating: 5,
    text: "La funzione di memorizzazione dati è geniale. Inserisco una volta i dati della scuola e li ritrovo precompilati in tutti i documenti. Mai più errori di copiatura!"
  },
  {
    rating: 5,
    text: "L'aggiornamento continuo dei template è quello che ci serviva. Non devo più preoccuparmi se sto usando la versione corretta del documento. Tutto sempre attuale!"
  }
]

const stats = [
  { target: 750, suffix: "+", label: "Scuole Attive" },
  { target: 50000, suffix: "+", label: "Documenti Generati" },
  { target: 85, suffix: "%", label: "Tempo Risparmiato" },
  { target: 99.8, suffix: "%", label: "Soddisfazione Clienti", decimal: 1 }
]

const TestimonialsSection = () => {
  return (
    <section className="section-gradient py-20 relative overflow-hidden">


      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-4">
            Siamo il partner quotidiano di oltre 750 scuole italiane
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-90">
            Scopri cosa dicono Dirigenti Scolastici e DSGA che hanno trasformato la loro gestione amministrativa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-brand-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white border-opacity-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const StatCounter = () => {
              const { displayValue, elementRef } = useCounterAnimation({
                target: stat.target,
                duration: 2500,
                suffix: stat.suffix,
                decimal: stat.decimal || 0
              })

              return (
                <motion.div
                  ref={elementRef}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-brand-secondary mb-2">
                    {displayValue}
                  </div>
                  <div className="text-white text-opacity-80 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              )
            }

            return <StatCounter key={index} />
          })}
        </motion.div>

        {/* Social Proof CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Unisciti a centinaia di scuole che hanno già scelto di semplificare la loro burocrazia con RedigoPA.
          </p>
          <button 
            className="btn-primary bg-white text-brand-primary hover:bg-neutral-light"
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Inizia Subito la Prova Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 