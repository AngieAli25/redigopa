'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  DocumentDuplicateIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: AcademicCapIcon,
    title: "Compilazione Passo-Passo",
    subtitle: "SEMPLICITÀ GUIDATA",
    description: "Ti guidiamo nella compilazione con campi automatici e variabili preimpostate. Come avere un assistente amministrativo esperto sempre disponibile."
  },
  {
    icon: DocumentDuplicateIcon,
    title: "Dati Memorizzati e Riutilizzati",
    subtitle: "ZERO RIPETIZIONI",
    description: "Inserisci una volta codice progetto, CUP e dati scuola: RedigoPA li precompila automaticamente in tutti i documenti successivi. Zero errori di digitazione."
  },
  {
    icon: ShieldCheckIcon,
    title: "Normative Sempre Attuali",
    subtitle: "SEMPRE AGGIORNATI",
    description: "I nostri esperti legali aggiornano costantemente tutti i template seguendo MIUR, ANAC e ultime circolari. Tu ti concentri sulla scuola."
  }
]

const ChiSiamoSection = () => {
  return (
    <section className="section-light py-20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-brand-primary mb-4">
            Perché centinaia di dirigenti scolastici e DSGA scelgono RedigoPA
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium">
            La rivoluzione digitale che semplifica la vita amministrativa delle scuole italiane
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="card-feature text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon Container */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-brand-secondary bg-opacity-10 rounded-full" />
                  <div className="relative flex items-center justify-center w-full h-full">
                    <IconComponent className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>

                {/* Subtitle Badge */}
                <div className="inline-block px-4 py-2 bg-brand-secondary bg-opacity-10 text-brand-secondary text-sm font-semibold rounded-full mb-4">
                  {feature.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-h3 text-neutral-dark mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-body text-neutral-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="btn-primary whitespace-nowrap px-8"
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
      </div>
    </section>
  )
}

export default ChiSiamoSection 