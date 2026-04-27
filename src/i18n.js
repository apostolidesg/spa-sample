import { createI18n } from 'vue-i18n';
import { loadLocaleContent } from './utils/contentLoader';

// Create i18n instance with empty messages initially
const i18n = createI18n({
  legacy: false,
  locale: 'el',
  fallbackLocale: 'en',
  messages: {
    en: {},
    el: {}
  }
});

// Load content for both locales
async function loadAllContent() {
  try {
    const [enContent, elContent] = await Promise.all([
      loadLocaleContent('en'),
      loadLocaleContent('el')
    ]);

    // Transform the content structure to match your current i18n keys
    // Currently: { common: {...}, home: {...}, about: {...} }
    // Need to flatten it to match your component usage

    i18n.global.setLocaleMessage('en', transformContent(enContent));
    i18n.global.setLocaleMessage('el', transformContent(elContent));

  } catch (error) {
    console.error('Error loading content:', error);
  }
}

function transformContent(content) {
  const transformed = {};

  for (const [file, data] of Object.entries(content)) {
    if (file === 'common') {
      transformed.navbar = data.navbar;
    } else if (file === 'home') {
      transformed.home = data;
    } else if (file === 'about') {
      transformed.about = data;
    } else if (file === 'services') {
      transformed.services = data;
      transformed.servicesAndContact = { hero: data.servicesContactHero };
    } else if (file === 'contact') {
      transformed.contact = data;
    }
  }

  return transformed;
}

export { loadAllContent };

export default i18n;
