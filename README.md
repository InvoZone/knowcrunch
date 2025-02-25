# Project Name

## Description

This project is built using Next.js 15 with the App Router. It includes essential scripts for development, building, starting, and linting the application.

## Installation

Before running any scripts, install dependencies using:

```sh
npm install
```

## Available Scripts

The following scripts are available in the `package.json` file:

### 1. Start Development Server

```sh
npm run dev
```

Runs the development server using Turbopack for faster builds. Access the application at `http://localhost:3000` by default.

### 2. Build the Application

```sh
npm run build
```

Generates an optimized production build of the application.

### 3. Start Production Server

```sh
npm run start
```

Starts the built application in production mode.

### 4. Lint the Codebase

```sh
npm run lint
```

Runs ESLint to check for and fix code style and syntax issues.

## Folder Structure

```
/project-root
│-- public/              # Static assets
│-- src/                 # Source files
│   │-- app/             # Next.js App Router pages
│   │-- assets/          # Manage Assets
│   │-- components/      # Reusable UI components
│   │-- styles/          # Global styles
│   │-- lib/             # Utility functions
│   │-- store/           # Global state management
│   │-- utils/           # Utility functions
│   │-- theme/           # App style theme
│-- .prettierrc.json     # Prettier configuration
│-- .eslint.config.mjs   # ESLint configuration
│-- next.config.js       # Next.js configuration
│-- package.json         # Project dependencies and scripts
│-- README.md            # Project documentation
```

## Technologies Used

- **Next.js 15** (App Router)
- **Turbopack** (for fast builds)
- **ESLint** (for code linting)

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Start the development server with `npm run dev`

## License

This project is licensed under [MIT License](LICENSE).
