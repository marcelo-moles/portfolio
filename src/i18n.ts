import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

const savedLanguage = localStorage.getItem('language')

const defaultLanguage: 'es' | 'en' =
  savedLanguage === 'en' ? 'en' : 'es'

const i18n = createI18n({
  legacy: false,
  locale: defaultLanguage,
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

// Informar al navegador el idioma inicial
document.documentElement.lang = defaultLanguage

export default i18n