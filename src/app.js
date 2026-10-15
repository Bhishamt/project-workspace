import { Logger } from "./logger.js";
import { getSystemHealth } from "./health.js";

/**
 * Application core service providing basic utility, logging, and status functions.
 */
export class AppService {
  constructor(name = "WorkspaceApp", version = "1.0.0", options = {}) {
    this.name = name;
    this.version = version;
    this.startedAt = new Date();
    this.logger = new Logger({ namespace: name, minLevel: options.logLevel || "info" });
  }

  /**
   * Returns current health and diagnostic status.
   */
  getStatus() {
    const health = getSystemHealth(this.startedAt);
    return {
      name: this.name,
      version: this.version,
      ...health
    };
  }

  /**
   * Formats a greeting message and logs the event.
   * @param {string} user 
   */
  greet(user = "Developer") {
    const message = `Hello, ${user}! Welcome to ${this.name} v${this.version}.`;
    this.logger.info("Greeting dispatched", { recipient: user });
    return message;
  }
}
