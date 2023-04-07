import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as chokidar from 'chokidar';

const ctx1 = await esbuild.context({
  entryPoints: [ 'src/main/main.ts' ],
  bundle: true,
  platform: 'node',
  external: [ 'electron' ],
  outdir: 'dist',
});

const ctx2 = await esbuild.context({
  entryPoints: [ 'src/preload.ts' ],
  bundle: true,
  platform: 'node',
  external: [ 'electron' ],
  outdir: 'dist',
});

const ctx3 = await esbuild.context({
  entryPoints: [ 'src/renderer/renderer.ts', 'src/renderer/renderer.css' ],
  bundle: true,
  outdir: 'dist',
});

Promise.allSettled([ctx1.watch(), ctx2.watch(), ctx3.watch()]);

const rendererSrc = 'src/renderer/renderer.html';
const rendererDest = 'dist/renderer.html';
fs.copyFileSync(rendererSrc, rendererDest);
chokidar
  .watch(rendererSrc)
  .on('change', () => setTimeout(() => fs.copyFileSync(rendererSrc, rendererDest), 100));
