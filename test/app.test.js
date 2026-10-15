import test from "node:test";
import assert from "node:assert/strict";
import { AppService } from "../src/app.js";
import { loadConfig } from "../src/config.js";
import { getSystemHealth } from "../src/health.js";

test("AppService creates instance with default values and generates greeting", () => {
  const service = new AppService("TestApp", "2.0.0");
  assert.equal(service.name, "TestApp");
  assert.equal(service.version, "2.0.0");

  const greeting = service.greet("Alice");
  assert.equal(greeting, "Hello, Alice! Welcome to TestApp v2.0.0.");
});

test("AppService getStatus returns healthy status with process diagnostics", () => {
  const service = new AppService("TestApp", "1.0.0");
  const status = service.getStatus();

  assert.equal(status.name, "TestApp");
  assert.equal(status.version, "1.0.0");
  assert.equal(status.status, "ok");
  assert.ok(status.process.nodeVersion.startsWith("v"));
  assert.ok(typeof status.memory.heapUsed === "string");
});

test("loadConfig parses default options correctly", () => {
  const cfg = loadConfig({
    PORT: "8080",
    NODE_ENV: "production",
    APP_NAME: "ProdService",
    DEBUG: "true"
  });

  assert.equal(cfg.port, 8080);
  assert.equal(cfg.nodeEnv, "production");
  assert.equal(cfg.appName, "ProdService");
  assert.equal(cfg.debug, true);
  assert.equal(cfg.isProduction, true);
});

test("loadConfig throws error on invalid port", () => {
  assert.throws(
    () => loadConfig({ PORT: "invalid-port" }),
    /Invalid PORT configuration/
  );
});

test("getSystemHealth returns system diagnostic snapshot", () => {
  const health = getSystemHealth();
  assert.equal(health.status, "ok");
  assert.ok(typeof health.uptime === "string");
  assert.ok(health.process.pid > 0);
});
