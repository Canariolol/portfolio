# Portafolio

Portafolio personal construido con `Next.js 15`, `React 19` y export estático para hosting. El formulario de contacto tiene dos caminos:

- En desarrollo local con `npm run dev`, responde la ruta `src/app/api/send/route.ts`.
- En hosting con Firebase, `/api/send` se reescribe a la Cloud Function `functions/sendEmail`.

## Requisitos

- `Node.js 20`
- `npm 10`

Versiones probadas localmente:

```bash
node -v
# v20.20.2

npm -v
# 10.8.2
```

## Levantar en local

Desde esta carpeta (`portfolio/`):

```bash
npm ci
cp .env.example .env
```

Agrega tu clave real en `.env`:

```bash
RESEND_API_KEY=...
```

Luego inicia el entorno de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Scripts útiles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estado actual

- `npm run dev`: funciona
- `npm run build`: funciona
- `npm run lint`: funciona para la app Next.js

La carpeta `functions/` es un proyecto separado de Firebase Functions y no forma parte del lint del frontend.

## Producción

El proyecto usa `output: 'export'` en `next.config.ts`, así que el sitio principal se genera como estático en `out/`.

Además, `firebase.json` reescribe:

- `/api/send` -> función `sendEmail`
- `**` -> `/index.html`

Si más adelante quieres revisar despliegue, conviene validar juntos que la estrategia final siga siendo Firebase Hosting + Firebase Functions y no otra plataforma.
