const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    },
    reporter: "@reportportal/agent-js-cypress",
    reporterOptions: {
      endpoint: "https://demo.reportportal.io/api/v1",
      apiKey:
        "padrao_cEtYiq4_Tz6h36EdkvAEJCAgMUHX7gDrAHP7E7fhbS7wDy3a56RPNCaMO3F3NNSh",
      project: "joaocjr97_personal",
      launch: "Testes de UI com Cypress",
      description: "Teste E2E da plataforma Ecommerce EBAC",
    },
  },
});