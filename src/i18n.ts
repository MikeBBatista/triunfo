import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

// Configuração do i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    lng: 'en', // idioma padrão
    fallbackLng: 'en', // idioma fallback
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
