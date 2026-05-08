export async function loadLocaleContent(locale) {
  try {
    const modules = import.meta.glob('/content/**/*.json');

    const content = {};

    for (const path in modules) {
      // path format: /content/{page}/{locale}/{section}.json
      const parts = path.split('/');
      if (parts[3] !== locale) continue;

      const page = parts[2];
      const section = parts[4].replace('.json', '');
      const module = await modules[path]();
      const data = { ...module.default };
      delete data.file_name;

      if (!content[page]) content[page] = {};

      if (section === page) {
        // Single-file page (e.g. common/el/common.json) — merge directly
        Object.assign(content[page], data);
      } else {
        // Section file (e.g. home/el/hero.json) — nest under section key
        content[page][section] = data;
      }
    }

    return content;
  } catch (error) {
    console.error(`Error loading content for locale ${locale}:`, error);
    return {};
  }
}
