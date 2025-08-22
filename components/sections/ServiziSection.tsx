'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FolderOpenIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: FolderOpenIcon,
    title: "PON e PNRR Senza Stress",
    category: "GESTIONE PROGETTI",
    description: "Tutti i documenti per gestire progetti PON e PNRR in un'unica cartella di lavoro. Dal decreto di assunzione al bilancio fino al monitoraggio, tutto guidato e conforme.",
    benefits: [
      "Documenti automaticamente collegati per progetto",
      "Scadenze e adempimenti sempre sotto controllo",
      "Supporto dedicato per progetti complessi"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
  },
  {
    icon: BuildingOfficeIcon,
    title: "MePA e Appalti in pochi click",
    category: "APPALTI E ACQUISTI",
    description: "Genera tutta la documentazione per appalti, gare e acquisti su MePA. Trattative dirette, richieste di offerta e procedure semplificate: tutto automatizzato e ANAC-compliant.",
    benefits: [
      "Template per ogni tipologia di gara",
      "Calcolo automatico soglie e procedure",
      "Documenti conformi alle linee guida ANAC"
    ],
    image: "/mepa-appalti.jpg"
  },
  {
    icon: ShieldCheckIcon,
    title: "GDPR e Privacy Scolastica",
    category: "PRIVACY E SICUREZZA",
    description: "Gestisci privacy, autorizzazioni, consensi e adempimenti GDPR con la tranquillità di essere sempre in regola. Include supporto DPO certificato.",
    benefits: [
      "Tutti i moduli privacy della scuola",
      "Aggiornamenti automatici normative"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
  },
  {
    icon: DocumentTextIcon,
    title: "Amministrazione Quotidiana Smart",
    category: "GESTIONE ORDINARIA",
    description: "Nomine, incarichi, regolamenti, delibere: tutta l'amministrazione ordinaria della scuola con template aggiornati e procedure semplificate.",
    benefits: [
      "Oltre 200+ template disponibili",
      "Procedure guidate per ogni adempimento"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
  }
]

const ServiziSection = () => {
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-brand-primary mb-4">
            Tutto Quello che Serve per una Gestione Documentale Perfetta
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium">
            Dalla gestione progetti PNRR agli appalti MePA: ogni documento necessario per la tua scuola
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="card-service"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-service-accent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-secondary text-white">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-body text-neutral-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-neutral-dark mb-3">Benefici:</h4>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-brand-secondary bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                          <CheckIcon className="w-3 h-3 text-brand-secondary" />
                        </div>
                        <span className="text-small text-neutral-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 p-8 bg-neutral-light rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-h3 text-brand-primary mb-4">
            Pronto a Semplificare la Tua Gestione Documentale?
          </h3>
          <p className="text-neutral-medium mb-6 max-w-2xl mx-auto">
            Scopri come RedigoPA può trasformare ore di lavoro burocratico in pochi minuti di compilazione guidata.
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Inizia Prova Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiziSection 