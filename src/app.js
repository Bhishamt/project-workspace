/**
 * Application core service providing basic utility and status functions.
 */

export class AppService {
  constructor(name = "WorkspaceApp", version = "1.0.0") {
    this.name = name;
    this.version = version;
    this.startedAt = new Date();
  }

  /**
   * Returns current health and diagnostic status.
   */
  getStatus() {
    return {
      name: this.name,
      version: this.version,
      uptimeSeconds: Math.floor((Date.now() - this.startedAt.getTime()) / 1000),
      timestamp: new Date().toISOString(),
      status: "healthy"
    };
  }

  /**
   * Formats a greeting message.
   * @param {string} user 
   */
  greet(user = "Developer") {
    return `Hello, ${user}! Welcome to ${this.name} v${this.version}.`;
  }
}
