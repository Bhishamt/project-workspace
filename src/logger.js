/**
 * Lightweight structured logging utility.
 */

const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

export class Logger {
  constructor(options = {}) {
    this.namespace = options.namespace || "app";
    this.minLevel = options.minLevel || "info";
  }

  shouldLog(level) {
    const currentWeight = LOG_LEVELS[this.minLevel] ?? 1;
    const targetWeight = LOG_LEVELS[level] ?? 1;
    return targetWeight >= currentWeight;
  }

  formatMessage(level, message, meta = null) {
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      level: level.toUpperCase(),
      namespace: this.namespace,
      message
    };

    if (meta && Object.keys(meta).length > 0) {
      payload.meta = meta;
    }

    return `[${timestamp}] [${payload.level}] [${this.namespace}]: ${message}${
      meta ? " " + JSON.stringify(meta) : ""
    }`;
  }

  debug(message, meta) {
    if (this.shouldLog("debug")) {
      console.debug(this.formatMessage("debug", message, meta));
    }
  }

  info(message, meta) {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", message, meta));
    }
  }

  warn(message, meta) {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", message, meta));
    }
  }

  error(message, meta) {
    if (this.shouldLog("error")) {
      console.error(this.formatMessage("error", message, meta));
    }
  }
}

export const defaultLogger = new Logger({ namespace: "default" });
