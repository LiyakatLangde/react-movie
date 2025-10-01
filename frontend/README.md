## GitHub Pages Deployment

This project is configured to deploy the `frontend` app to GitHub Pages using GitHub Actions.

Steps to publish:

1. Push your code to a GitHub repository named `react-movie` under your account.
2. Ensure your default branch is `main`.
3. In GitHub, go to Settings → Pages and set Source to "GitHub Actions" (if prompted).
4. Push to `main`. The workflow `.github/workflows/deploy.yml` will build and deploy `frontend/dist`.

Your site will be available at: `https://<your-username>.github.io/react-movie/`

Notes:
- `vite.config.js` sets `base: '/react-movie/'` for correct asset paths on GitHub Pages.
- `404.html` is generated from `index.html` for SPA routing on Pages.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
