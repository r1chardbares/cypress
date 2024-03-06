import { defineConfig } from "cypress";
// @ts-ignore
const { rmdir } = require("fs");

export default defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/test-result-[hash].xml",
  },
  video: false,
  numTestsKeptInMemory: 100,
  blockHosts: [
    "*.google-analytics.com",
    "*app.mluvii.com",
    "*.google.com",
    "*.hotjar.com",
  ],

  e2e: {
    baseUrl: "url",
    setupNodeEvents(on, config) {
      on("task", {
        deleteFolder(folderName) {
          console.log("deleting folder %s", folderName);

          return new Promise((resolve, reject) => {
            rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error(err);
                return reject(err);
              }
              resolve(null);
            });
          });
        },
      });
    },
  },
});
