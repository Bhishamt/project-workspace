import { AppService } from "./app.js";

function bootstrap() {
  const app = new AppService("ModularProject", "1.0.0");
  
  console.log("-----------------------------------------");
  console.log(app.greet("Bhisham"));
  console.log("Application Status:", JSON.stringify(app.getStatus(), null, 2));
  console.log("-----------------------------------------");
}

bootstrap();
