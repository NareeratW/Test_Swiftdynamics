# JSW KOL Staff Portal

React + TypeScript + Vite UI inspired by https://www.jswkol.com/login.

## Install and run

Requires Node.js 24+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173.

## Verify and build

```sh
npm test
npm run build
npm run preview
```

## Features

- `/login`: Username/email and password with validation.
- `/register`: Six-step staff registration, field validation and review.
- `/forgot-password`: Email validation and simulated reset confirmation.
- Responsive desktop/mobile layouts and Thai/English switching.
- Thai address search automatically fills subdistrict, district, province and postal code.
- Contact and bank steps require complete fields on Continue; use Skip to omit them.

Frontend demo only: no backend authentication, account creation or email delivery. Form data is not persisted or transmitted. Only the selected language is stored locally. Remember me is a UI placeholder.

Static hosting must rewrite non-file routes to `index.html`.

## Assets

Creator image and favicon supplied by the user. Google Fonts with system fallbacks and Lucide icons. Thai address data: https://github.com/earthchie/jquery.Thailand.js (WTFPL), bundled locally. Address names remain Thai in both language modes.
