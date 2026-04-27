// Load all content files for a given locale and merge them
export async function loadLocaleContent(locale) {
  try {
    // Import all JSON files from the content folder for this locale
    const modules = import.meta.glob('/content/**/*.json');

    const content = {};

    // Load each file that matches our locale
    for (const path in modules) {
      // path format: /content/{locale}/{pageName}/{pageName}.json
      const parts = path.split('/');
      if (parts[2] === locale) {
        const module = await modules[path]();
        const fileName = parts[3];

        // Merge the content, removing the file_name field
        const data = { ...module.default };
        delete data.file_name;

        content[fileName] = data;
      }
    }

    return content;
  } catch (error) {
    console.error(`Error loading content for locale ${locale}:`, error);
    return {};
  }
}
