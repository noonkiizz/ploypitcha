# Ploypitcha Portfolio Project

## Project Info

A modern portfolio web app for Ploypitcha Boontavipitak, built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## How can I edit this code?

You can work locally using your own IDE. The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project to GitHub Pages?

1. Add the following to your `vite.config.ts`:
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react-swc';
   import path from 'path';
   // ...existing code...
   export default defineConfig({
     // ...existing code...
     base: '/<REPO_NAME>/', // Set to your repo name
     // ...existing code...
   });
   ```
2. Add a deploy script to your `package.json`:
   ```json
   "scripts": {
     // ...existing code...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages`:
   ```sh
   npm install --save-dev gh-pages
   ```
4. Push your code to GitHub, then run:
   ```sh
   npm run deploy
   ```
5. Set your repo's GitHub Pages source to `gh-pages` branch in repo settings.

## Custom Domain

You can set a custom domain in your repository's GitHub Pages settings.
