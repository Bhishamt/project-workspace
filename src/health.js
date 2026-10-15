/**
 * System diagnostic and health evaluation module.
 */

export function getSystemHealth(startedAt = new Date()) {
  const memory = process.memoryUsage();
  const uptimeSeconds = Math.floor((Date.now() - startedAt.getTime()) / 1000);

  const toMB = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds}s`,
    process: {
      pid: process.pid,
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch
    },
    memory: {
      rss: toMB(memory.rss),
      heapTotal: toMB(memory.heapTotal),
      heapUsed: toMB(memory.heapUsed),
      external: toMB(memory.external)
    }
  };
}
