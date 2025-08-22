# 🎯 RedigoPA Landing Page

Una landing page moderna ed elegante per RedigoPA, la prima piattaforma che trasforma la compilazione di atti amministrativi scolastici da incubo burocratico a processo guidato di 5 minuti.

## ✨ Caratteristiche

- 🎨 **Design System Completo** - Colori brand, tipografia Poppins e componenti riutilizzabili
- 📱 **Responsive Design** - Ottimizzato per desktop, tablet e mobile
- ⚡ **Performance Ottimizzate** - Next.js 14 con App Router per caricamenti ultrarapidi
- 🎭 **Animazioni Fluide** - Micro-interazioni con Framer Motion 12
- 🔧 **Form Funzionali** - Validazione con React Hook Form
- ♿ **Accessibilità** - Conforme WCAG AA con focus states e contrasti ottimali
- 🎯 **SEO Ottimizzato** - Metadati strutturati e ottimizzazioni performance

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS con design system personalizzato
- **Animazioni**: Framer Motion 12
- **Form**: React Hook Form
- **Icone**: Heroicons
- **Componenti UI**: Headless UI
- **Linguaggio**: TypeScript
- **Font**: Poppins (Google Fonts)

## 🚀 Quick Start

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Avvio Sviluppo

```bash
npm run dev
```

La landing page sarà disponibile su `http://localhost:3000`

### 3. Build Produzione

```bash
npm run build
npm start
```

## 📁 Struttura Progetto

```
RedigoPA-Nuova2/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Stili globali e design system
│   ├── layout.tsx               # Layout principale e metadati SEO
│   └── page.tsx                 # Pagina home che assembla tutte le sezioni
├── components/                   # Componenti React
│   └── sections/                # Sezioni della landing page
│       ├── HeroSection.tsx      # Sezione hero con CTA principale
│       ├── ChiSiamoSection.tsx  # Feature cards e value proposition
│       ├── ServiziSection.tsx   # Service cards dettagliate
│       ├── TestimonialsSection.tsx # Social proof e testimonial
│       ├── ContactSection.tsx   # Form di contatto funzionale
│       ├── FAQSection.tsx       # FAQ con accordions animati
│       └── FinalCTASection.tsx  # Call-to-action finale
├── tailwind.config.js           # Configurazione design system
├── tsconfig.json                # Configurazione TypeScript
├── next.config.js               # Configurazione Next.js
└── package.json                 # Dipendenze e scripts
```

## 🎨 Design System

### Palette Colori Brand

```css
--brand-primary: #0E5977      /* Blu oceano profondo */
--brand-secondary: #EDA03E    /* Arancione ambra */
--brand-primary-dark: #0A4A64 /* Versione più scura per gradient */
--brand-secondary-dark: #D97706 /* Hover state arancione */
```

### Tipografia Poppins

- **H1 Hero**: 4rem desktop / 2.5rem mobile, font-weight 700
- **H2 Sezioni**: 2.5rem desktop / 2rem mobile, font-weight 600  
- **H3 Cards**: 1.3rem, font-weight 500
- **Body Text**: 1rem-1.2rem, line-height 1.6
- **Buttons**: 1rem, font-weight 600

### Componenti CSS Riutilizzabili

```css
.btn-primary          /* Button principale arancione */
.btn-secondary        /* Button secondario outline */
.card-feature         /* Card per feature */
.card-service         /* Card per servizi */
.card-testimonial     /* Card testimonial con glassmorphism */
.container-custom     /* Container responsive centrato */
.form-input          /* Input form stilizzati */
```

## 📋 Sezioni Implementate

### 1. 🎯 Hero Section
- Background con overlay gradiente
- Titolo principale con highlight colorato
- CTA primario con trust indicators
- Animazioni di ingresso staggered
- Scroll indicator animato

### 2. 📋 Chi Siamo Section  
- 3 feature cards con icone Heroicons
- Hover effects e micro-animazioni
- Layout responsive grid
- CTA secondario

### 3. 🛠️ Servizi Section
- 4 service cards dettagliate con immagini
- Benefits list con check icons
- Dashboard preview image
- Gradient accent bars

### 4. ⭐ Testimonials Section
- 3 testimonial con rating stelle
- Glassmorphism effects
- Statistiche credibilità animate
- Background gradient brand

### 5. 📞 Contact Section
- Form completo con validazione
- Success state con animazione
- Benefits sidebar
- Integration ready (console.log per ora)

### 6. ❓ FAQ Section
- 6 FAQ con accordions animati
- Smooth expand/collapse
- CTA per supporto aggiuntivo

### 7. 💎 Final CTA Section
- Strong value proposition finale
- Key benefits summary
- Trust indicators
- Background decorativo animato

## 🔧 Personalizzazione

### Colori Brand
Modifica i colori in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#TUO_COLORE',
    secondary: '#TUO_COLORE_SECONDARIO',
  }
}
```

### Contenuti
Tutti i testi sono centralizzati nei rispettivi componenti delle sezioni. Modifica direttamente i file in `components/sections/`.

### Animazioni
Le animazioni sono configurabili tramite le props di Framer Motion in ogni componente.

## 🎯 Funzionalità

### ✅ Già Implementate
- Design system completo
- Tutte le sezioni della landing page
- Animazioni e micro-interazioni
- Form di contatto con validazione
- Layout responsive
- SEO ottimizzato
- Accessibilità WCAG AA

### 🔄 Integration Ready
- Form submission (attualmente console.log)
- Analytics tracking points
- CMS integration ready
- API endpoints ready

## 📱 Responsive Breakpoints

```css
sm: 640px    /* Tablet portrait */
md: 768px    /* Tablet landscape */
lg: 1024px   /* Desktop small */
xl: 1280px   /* Desktop standard */
2xl: 1536px  /* Desktop large */
```

## 🔍 SEO & Performance

- **Metadati strutturati** con Open Graph e Twitter Cards
- **Font preloading** per Poppins
- **Immagini ottimizzate** con next/image
- **Lazy loading** componenti
- **Tree shaking** automatico
- **Core Web Vitals** ottimizzati

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 Licenza

Progetto sviluppato per RedigoPA. Tutti i diritti riservati.

---

## 🚀 Deploy

### Vercel (Consigliato)
```bash
npm run build
# Deploy su Vercel
```

### Netlify
```bash
npm run build
# Deploy cartella .next su Netlify
```

### Server Tradizionale
```bash
npm run build
npm start
```

---

**Sviluppato con ❤️ per RedigoPA**
*Trasformiamo la burocrazia scolastica da incubo a processo guidato di 5 minuti.* 