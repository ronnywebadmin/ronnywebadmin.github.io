import { cp, mkdir } from 'node:fs/promises';

const passthroughFiles = ['about.html', 'books.html', 'contact.html', 'media.html'];

await mkdir('dist/images', { recursive: true });
await mkdir('dist/assets', { recursive: true });
await cp('images', 'dist/images', { recursive: true });
await cp('assets', 'dist/assets', { recursive: true });

for (const file of passthroughFiles) {
  await cp(file, `dist/${file}`);
}
