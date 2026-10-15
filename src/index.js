import { AppService } from "./app.js";
import { config } from "./config.js";

function bootstrap() {
  const app = new AppService(config.appName, "1.0.0", {
    logLevel: config.debug ? "debug" : "info"
  });
  
  console.log("-----------------------------------------");
  console.log(app.greet("Bhisham"));
  console.log("Application Status:", JSON.stringify(app.getStatus(), null, 2));
  console.log("Active Config:", JSON.stringify(config, null, 2));
  console.log("-----------------------------------------");
}

bootstrap();
