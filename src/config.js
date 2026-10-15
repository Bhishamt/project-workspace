/**
 * Environment configuration and validation utility.
 */

export function loadConfig(env = process.env) {
  const port = parseInt(env.PORT || "3000", 10);
  if (Number.isNaN(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid PORT configuration: "${env.PORT}". Must be between 1 and 65535.`);
  }

  const validEnvironments = ["development", "test", "production"];
  const nodeEnv = env.NODE_ENV || "development";
  if (!validEnvironments.includes(nodeEnv)) {
    throw new Error(`Invalid NODE_ENV: "${nodeEnv}". Expected one of: ${validEnvironments.join(", ")}`);
  }

  return {
    port,
    nodeEnv,
    appName: env.APP_NAME || "ModularProject",
    debug: env.DEBUG === "true" || env.DEBUG === "1",
    isProduction: nodeEnv === "production",
    isDevelopment: nodeEnv === "development",
    isTest: nodeEnv === "test"
  };
}

export const config = loadConfig();
