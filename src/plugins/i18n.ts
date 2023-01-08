import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';

type MessageSchema = typeof fr;

const i18n = createI18n<[MessageSchema], 'fr'>({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
  },
});

export default i18n;
