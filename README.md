# PROJECT NAME

This project is a React application built with TypeScript and Vite. It includes a variety of tools and libraries to streamline development, including ESLint, Prettier, TailwindCSS, and more.

## Table of Contents

- [PROJECT NAME](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [Project Structure](#project-structure)
  - [ESLint Configuration](#eslint-configuration)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd <PROJECT-NAME>
npm install
```

## Scripts

The following scripts are available in the

package.json

file:

- `dev`: Starts the development server using Vite.
- `build`: Builds the project using TypeScript and Vite.
- `lint`: Runs ESLint to check for code quality issues.
- `format`: Formats the code using Prettier.
- `preview`: Previews the production build using Vite.

You can run these scripts using `npm run <script-name>`. For example:

```sh
npm run dev
```

## Dependencies

The project includes the following dependencies:

- `@fullcalendar/core`: FullCalendar core library.
- `@fullcalendar/daygrid`: FullCalendar day grid plugin.
- `@fullcalendar/react`: FullCalendar React integration.
- `@radix-ui/react-slot`: Radix UI slot component.
- `@tanstack/react-query`: React Query for data fetching.
- `@tanstack/react-query-devtools`: DevTools for React Query.
- `@tanstack/react-table`: React Table for data tables.
- `axios`: Promise-based HTTP client.
- `class-variance-authority`: Utility for managing class names.
- `clsx`: Utility for constructing className strings.
- `js-cookie`: JavaScript API for handling cookies.
- `lucide-react`: React icons library.
- `react`: React library.
- `react-dom`: React DOM library.
- `react-hook-form`: Form handling library for React.
- `react-router-dom`: Routing library for React.
- `tailwind-merge`: Utility for merging Tailwind CSS classes.
- `tailwindcss-animate`: Tailwind CSS animations.
- `zod`: TypeScript-first schema declaration and validation library.

## Dev Dependencies

The project includes the following development dependencies:

- `@eslint/js`: ESLint JavaScript configuration.
- `@types/js-cookie`: TypeScript definitions for js-cookie.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `eslint`: Linter for JavaScript and TypeScript.
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
- `eslint-plugin-import`: ESLint plugin for import/export syntax.
- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule.
- `eslint-plugin-react-hooks`: ESLint plugin for React hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
- `globals` Global variables for ESLint.
- `postcss`: Tool for transforming CSS with JavaScript.
- `prettier`: Code formatter.
- `prettier-plugin-tailwindcss`: Prettier plugin for Tailwind CSS.
- `tailwindcss`: Utility-first CSS framework.
- `typescript`: TypeScript language.
- `typescript-eslint`: TypeScript plugin for ESLint.
- `vite`: Frontend build tool.

## Project Structure

The project has the following structure:

```
.vscode/
	extensions.json
	settings.json
public/
README.md
src/
	App.tsx
	assets/
	components/
		custom/
		ui/
	core/
		constants/
		services/
		utils/
	lib/
		utils.ts
	main.tsx
	pages/
	routes/
	vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## ESLint Configuration

The ESLint configuration is defined in

eslint.config.js

. It includes recommended settings for JavaScript, TypeScript, and React, as well as custom rules for the project.

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: ['!./*', '!../*'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
```
# ah-claim-frontend
