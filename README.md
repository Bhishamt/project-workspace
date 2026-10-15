# Project Workspace

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight modular application built with clean architecture principles in ECMAScript standard modules.

---

## ✨ Features

- **Modular Architecture**: Clean separation of services, configurations, and utilities.
- **Environment Validation**: Strict runtime configuration loader with fallback defaults.
- **Structured Logging**: Built-in tiered logger (`DEBUG`, `INFO`, `WARN`, `ERROR`) with timestamps and metadata.
- **System Health Diagnostics**: Real-time process memory metrics (RSS, Heap), uptime, and platform telemetry.
- **Native Test Runner**: Fast unit test suite powered by Node.js built-in `node:test` runner.

---

## 📁 Project Structure

```text
project-workspace/
├── src/
│   ├── app.js             # Core AppService business logic
│   ├── config.js          # Environment configuration & validator
│   ├── health.js          # Memory and process diagnostics
│   ├── index.js           # Application bootstrap entry point
│   └── logger.js          # Structured logger utility
├── test/
│   └── app.test.js        # Unit test suite
├── .editorconfig          # Consistent code style guidelines
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore definitions
├── package.json           # Package manifest and run scripts
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- Git

### Installation

Clone the repository and inspect dependencies:

```bash
git clone https://github.com/Bhishamt/project-workspace.git
cd project-workspace
```

### Running the Application

Start the application:

```bash
npm start
```

### Running Tests

Execute the automated test suite:

```bash
npm test
```

---

## ⚙️ Configuration

Copy `.env.example` to `.env` to customize settings:

| Variable | Type | Default | Description |
|---|---|---|---|
| `PORT` | number | `3000` | Application port |
| `NODE_ENV` | string | `development` | Runtime environment (`development`, `test`, `production`) |
| `APP_NAME` | string | `ModularProject` | Display name of the service |
| `DEBUG` | boolean | `false` | Enable verbose debug logging |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
