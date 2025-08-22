'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Come funziona esattamente la prova gratuita di 30 giorni?",
    answer: "Attivi immediatamente il tuo account con accesso completo a tutti i template e funzionalità. Puoi creare fino a 20 documenti durante il trial. Non c'è rinnovo automatico: alla scadenza, scegli tu se continuare con un abbonamento."
  },
  {
    question: "I documenti generati sono legalmente validi e aggiornati?",
    answer: "Assolutamente sì. Il nostro team legale specializzato in diritto scolastico aggiorna costantemente tutti i template seguendo la normativa vigente, linee guida e circolari MIUR e ANAC. Ogni documento è conforme e pronto per l'uso ufficiale."
  },
  {
    question: "Posso utilizzare RedigoPA se non sono esperto di tecnologia?",
    answer: "RedigoPA è pensato per essere semplicissimo. Ti guida passo-passo nella compilazione con campi da riempire e menu a scelta multipla. Inoltre, offriamo tutorial gratuiti e supporto dedicato per aiutarti a iniziare."
  },
  {
    question: "Che differenza c'è tra i vari abbonamenti disponibili?",
    answer: "RedigoPA DOC (€199/anno) include i template base. Privacy (€299) aggiunge gestione GDPR. Appalti (€349) include procedure di affidamento. Gold e Platinum offrono servizi aggiuntivi come assistenza tecnica 12 mesi pareri e consulenza legale."
  },
  {
    question: "I miei dati e documenti sono al sicuro?",
    answer: "La sicurezza è la nostra priorità. Utilizziamo protocolli di crittografia avanzati, server certificati ISO27001, backup multipli e accesso limitato. I tuoi dati restano sempre di tua proprietà esclusiva."
  },
  {
    question: "Posso condividere l'accesso con altri colleghi della scuola?",
    answer: "Sì, ogni abbonamento include accessi multipli per il team amministrativo della scuola. Puoi creare account separati per DS, DSGA e personale autorizzato, ognuno con i propri permessi di accesso."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-white py-20">
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
            Le Domande Più Frequenti su RedigoPA
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium">
            Trova le risposte alle domande più comuni sulla piattaforma
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-neutral-border last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-dark pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon 
                      className={`w-6 h-6 transition-colors ${
                        openIndex === index ? 'text-brand-secondary' : 'text-brand-primary'
                      }`} 
                    />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-8">
                      <p className="text-neutral-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection 