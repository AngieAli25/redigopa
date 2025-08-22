// Utilità per l'integrazione del form di contatto con backend

export interface ContactFormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  scuola: string
  ruolo: string
  messaggio?: string
  privacy: boolean
}

export interface FormSubmissionResponse {
  success: boolean
  message: string
  data?: any
}

// Simulazione invio form (sostituire con vera implementazione)
export const submitContactForm = async (data: ContactFormData): Promise<FormSubmissionResponse> => {
  try {
    // Esempio con fetch API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Errore durante l\'invio del form')
    }

    return {
      success: true,
      message: 'Form inviato con successo!',
      data: result
    }
  } catch (error) {
    console.error('Errore invio form:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Errore sconosciuto'
    }
  }
}

// Validazione email avanzata
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

// Validazione telefono italiano
export const validateItalianPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+39)?[0-9]{8,10}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Sanitizzazione dati form
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    nome: data.nome.trim(),
    cognome: data.cognome.trim(),
    email: data.email.trim().toLowerCase(),
    telefono: data.telefono.replace(/\s/g, ''),
    scuola: data.scuola.trim(),
    ruolo: data.ruolo,
    messaggio: data.messaggio?.trim() || '',
    privacy: data.privacy
  }
}

// Integrazione con Google Analytics / Meta Pixel
export const trackFormSubmission = (data: ContactFormData) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form',
      value: 1
    })
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'Contact Form',
      content_category: 'lead_generation'
    })
  }
}

// Integrazione con CRM (esempio HubSpot)
export const syncWithCRM = async (data: ContactFormData) => {
  try {
    // Esempio integrazione HubSpot
    const hubspotData = {
      properties: {
        firstname: data.nome,
        lastname: data.cognome,
        email: data.email,
        phone: data.telefono,
        company: data.scuola,
        jobtitle: data.ruolo,
        message: data.messaggio
      }
    }

    // Sostituire con vera API key HubSpot
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_HUBSPOT_API_KEY'
      },
      body: JSON.stringify(hubspotData)
    })

    return response.ok
  } catch (error) {
    console.error('Errore sincronizzazione CRM:', error)
    return false
  }
} 