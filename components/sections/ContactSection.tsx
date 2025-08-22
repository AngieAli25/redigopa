'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface ContactFormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  scuola: string
  ruolo: string
  messaggio?: string
  privacy: boolean
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simula invio form
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const benefits = [
    "Attivazione in 24 h",
    "Tutorial gratuito - Sessione di onboarding personalizzata inclusa",
    "Supporto dedicato - Team esperto a tua disposizione durante la prova",
    "Zero impegni - Nessun rinnovo automatico, cancelli quando vuoi"
  ]

  if (isSubmitted) {
    return (
      <section id="contact-form" className="section-light py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-brand-medium">
              <div className="w-16 h-16 bg-brand-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-h3 text-brand-primary mb-4">
                Richiesta Inviata con Successo!
              </h3>
              <p className="text-neutral-medium">
                Riceverai le credenziali di accesso alla piattaforma entro 2 minuti via email.
                Il nostro team ti contatterà per organizzare il tutorial personalizzato.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="section-light py-20">
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
            Inizia Subito la Tua Prova Gratuita
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium">
            Compila il form e ricevi accesso immediato alla piattaforma + tutorial personalizzato con il nostro team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-brand-medium">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nome e Cognome */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="nome">
                        Nome *
                      </label>
                      <input
                        {...register('nome', { required: 'Nome è obbligatorio' })}
                        type="text"
                        id="nome"
                        className="form-input"
                        placeholder="Il tuo nome"
                      />
                      {errors.nome && (
                        <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="cognome">
                        Cognome *
                      </label>
                      <input
                        {...register('cognome', { required: 'Cognome è obbligatorio' })}
                        type="text"
                        id="cognome"
                        className="form-input"
                        placeholder="Il tuo cognome"
                      />
                      {errors.cognome && (
                        <p className="text-red-500 text-sm mt-1">{errors.cognome.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email e Telefono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="email">
                        Email *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email è obbligatoria',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email non valida'
                          }
                        })}
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="email@scuola.edu.it"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="telefono">
                        Telefono *
                      </label>
                      <input
                        {...register('telefono', { required: 'Telefono è obbligatorio' })}
                        type="tel"
                        id="telefono"
                        className="form-input"
                        placeholder="+39 xxx xxx xxxx"
                      />
                      {errors.telefono && (
                        <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Scuola e Ruolo */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="scuola">
                        Scuola/Istituto *
                      </label>
                      <input
                        {...register('scuola', { required: 'Scuola è obbligatoria' })}
                        type="text"
                        id="scuola"
                        className="form-input"
                        placeholder="Nome della tua scuola"
                      />
                      {errors.scuola && (
                        <p className="text-red-500 text-sm mt-1">{errors.scuola.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="ruolo">
                        Ruolo *
                      </label>
                      <select
                        {...register('ruolo', { required: 'Ruolo è obbligatorio' })}
                        id="ruolo"
                        className="form-input"
                      >
                        <option value="">Seleziona il tuo ruolo</option>
                        <option value="dirigente">Dirigente Scolastico</option>
                        <option value="dsga">DSGA</option>
                        <option value="ata">Personale ATA</option>
                        <option value="altro">Altro</option>
                      </select>
                      {errors.ruolo && (
                        <p className="text-red-500 text-sm mt-1">{errors.ruolo.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label className="form-label" htmlFor="messaggio">
                      Messaggio (opzionale)
                    </label>
                    <textarea
                      {...register('messaggio')}
                      id="messaggio"
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Raccontaci le tue esigenze specifiche (opzionale)"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      {...register('privacy', { required: 'Devi accettare il trattamento dei dati' })}
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-brand-secondary border-neutral-input rounded focus:ring-brand-secondary"
                    />
                    <label htmlFor="privacy" className="text-sm text-neutral-medium">
                      Accetto il trattamento dei dati per ricevere la prova gratuita e comunicazioni su RedigoPA. 
                      <a href="#" className="text-brand-primary hover:underline ml-1">
                        Leggi l'informativa privacy.
                      </a>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-red-500 text-sm">{errors.privacy.message}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Invio in corso...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        ATTIVA PROVA GRATUITA 30 GIORNI
                        <PaperAirplaneIcon className="ml-2 h-5 w-5" />
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="text-h3 text-brand-primary mb-6">
                  Cosa Ottieni
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-secondary bg-opacity-10 rounded-full flex items-center justify-center mt-0.5">
                        <CheckIcon className="w-4 h-4 text-brand-secondary" />
                      </div>
                      <span className="text-small text-neutral-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 