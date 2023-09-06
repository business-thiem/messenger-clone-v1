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
- NextAuth : User account authentication library
  - Use with `bcrypt` : "A library to help you hash passwords". NEVER store plain text PWs in DB. See: https://www.npmjs.com/package/bcrypt
- Axios : "promise promise-based HTTP Client for node.js." See: https://axios-http.com/docs/intro
- React-Hot-Toast: Lightweight easy to use react toast notifcations. See: https://react-hot-toast.com/
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
- make sure to use either no quotes or single quotes '' for .env variables. The parser doesn't recognize double quotes " ". See: https://github.com/prisma/prisma/discussions/12170#discussioncomment-3447194
  - `npx prisma generate`: loads new .env variables into prisma schema. Helps fix
    - ```ts
      error: Error validating datasource `db`: the URL must start with the protocol `mongo`
      ```
- `npx prisma studio` displays DB on browser
- `npx prisma db push` pushes your schema to the db URL in .env
- `npx prisma generate && npm run build` in vercel build deployments (override)

NextAuth & bcrypt Notes:

- `npm install next-auth@latest` installation
  - `npm install @prisma/client @next-auth/prisma-adapter bcrypt` and `npm install -D @types/bcrypt` for prisma & nextAuth integration
- Using the Google and Github auths:
  - Located in github.com page settings for sign in and auth for signing in with Github credentials
  - Located in https://console.cloud.google.com/ : in OAuth consent screen
    - See: https://youtu.be/PGPGcKBpAk8?si=b1-onjJF1CGwDtKk&t=6913 to jog memory

Misc. Notes:

- New shorthand operators. This project is the first time using these. They are very cool:
  - `?.` : Nullish Coalescing Operator
  - `??` : Optional Chaining
  - See: https://javascript.plainenglish.io/3-uses-of-in-javascript-why-pro-developers-love-using-javascript-operator-565bc8b235a4#:~:text=The%20JavaScript%20question%20mark%20dot,in%20the%20object%20or%20not. for more details explanation

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
