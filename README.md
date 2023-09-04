Placeholder for image`<img src="https://raw.githubusercontent.com/business-thiem/NextJS13-scott-tut/main/assets/NextJS13-todo-ss1.png" width="1200" height="500">`

# Overview

-for learning how messenger works
actual overview to be filled in later.

## App Info

...

#### Example

## Tech used

- NextJS : server-sided logic for server-sided rendering (SSR), great for SEO, makes loading pages faster for client. Must opt into 'use client' react scripts
- Tailwind : CSS library
  - tailwindcss/forms: Dynamic tailwind css classes based on form states. Provides basic reset for form styles and easier to override styles. See: https://github.com/tailwindlabs/tailwindcss-forms
  - clsx : smaller sized tailwind?
- Prisma : ORM, create tables in a human-readable way
- MongoDB : DB for saving users and messages See MongoDB Atlas: https://cloud.mongodb.com/
- NodeJS : JS package manager
- Pusher API :
- NextAuth :
- Prettier: Makes code look nice and formatted. Adds semicolons (good habit from Java)
- Vitest: Unit test framework. See: https://vitest.dev/

## Personal Notes

Future TODO:

- Known Bugs:
  ...
- UI additions:
  ...

Prisma Studio Notes:

- `npm install @prisma/client`: package installation for production
- `npm install prisma --save-dev`: for dev dependencies
- `npx prisma format` cleans up schema after you finish. (Important: it also writes your side relations between models)
- `npx prisma studio` displays DB on browser
- `npx prisma db push` pushes your schema to the db URL in .env
- `npx prisma generate && npm run build` in vercel build deployments (override)

### Workflows guide for myself in future

Vitest

- terminal: `npm i @testing-library/jest-dom @testing-library/react vitest @vitejs/plugin-react-swc jsdom --save-dev`
- create:

  - vite.config.ts at root with the following. See: https://github.com/Hendrixer/fullstack-ai-nextjs/blob/main/vite.config.ts

  ```ts
  import { defineConfig } from "vitest/config";
  import react from "@vitejs/plugin-react-swc";

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    test: {
      include: [
        "**/**tests**/**/_.[jt]s?(x)",
        "**/?(_.)+(spec|test).[jt]s?(x)",
      ],
      globals: true,
      environment: "jsdom",
      setupFiles: "setupTests",
      mockReset: true,
    },
  });
  ```

  - setupTests.ts at root
  - tsconfig.node.json at root : this runs client side tests on server side (still no standardized configuration for nextjs13 yet)

- add `"references": [{ "path": "./tsconfig.node.json" }]` to tsconfig.json
- add `"test": "vitest"` to package.json scripts

- create tests folder at root : create write tests. See home.test.tsx as sample
- run tests with `npm test`
- `npm build` if you want to build locally without vercel
