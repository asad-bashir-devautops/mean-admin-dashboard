const fs = require('node:fs');
const path = require('node:path');

const value = process.env.API_URL;
if (!value) {
  throw new Error('Set API_URL to the backend URL including /api');
}

const url = new URL(value);
if (!['http:', 'https:'].includes(url.protocol)) {
  throw new Error('API_URL must use HTTP or HTTPS');
}

fs.writeFileSync(
  path.join(__dirname, '../src/app/api-config.ts'),
  `export const API_BASE_URL = ${JSON.stringify(value.replace(/\/+$/, ''))};\n`
);
