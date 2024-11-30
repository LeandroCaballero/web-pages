const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);

      // Importación dinámica de cypress-image-diff-html-report
      import("cypress-image-diff-html-report").then((module) => {
        const addDiffHtmlReport = module; // Accedemos al export por defecto
        addDiffHtmlReport(on, config); // Usamos la función normalmente
      });

      return config;
    },
    baseUrl: "http://localhost:5173/web-pages/",
  },
});
