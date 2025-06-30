import "dotenv/config";
import { sauceConf } from "./sauce.conf.js";

function getConfig() {
  switch (process.env.ENVIRONMENT) {
    case "local":
      return console.log(
        "Sem configuração para o ambiente local, rode com uma Device Farm."
      );
    case "saucelabs":
      return sauceConf;
  }
}

export const config = getConfig();
