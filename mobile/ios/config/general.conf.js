import { specsConf } from "./specs.conf.js";
import { suitesConf } from "./suites.conf.js";
import { reportConf } from "./reports.conf.js";

export let generalConf = {
  maxInstances: 10,
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  ...specsConf,
  ...suitesConf,
  ...reportConf,
};
