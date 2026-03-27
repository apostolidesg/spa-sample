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

// Transform content from file-based structure to flat structure
function transformContent(content) {
  const transformed = {};

  // Merge all files into one flat structure
  for (const [file, data] of Object.entries(content)) {
    if (file === 'common') {
      // Common content: navbar, footer
      transformed.navbar = data.navbar;
      transformed.footer = data.footer;
    } else if (file === 'home') {
      // Home content
      transformed.home = data;
    } else if (file === 'about') {
      // About content
      transformed.about = data;
    } else if (file === 'services') {
      // Services content
      transformed.services = data;
    } else if (file === 'servicesContact') {
      // Services & Contact content
      transformed.servicesAndContact = data;
    } else if (file === 'contact') {
      // Contact content
      transformed.contact = data;
    }
  }

  return transformed;
}

export { loadAllContent };

export default i18n;
