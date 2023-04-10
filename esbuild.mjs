import * as esbuild from 'esbuild';

const ctx1 = await esbuild.context({
  entryPoints: [ 'src/main/main.ts' ],
  bundle: true,
  platform: 'node',
  external: [ 'electron', 'fsevents' ],
  outdir: 'dist',
});

const ctx2 = await esbuild.context({
  entryPoints: [ 'src/preload.ts' ],
  bundle: true,
  platform: 'node',
  external: [ 'electron' ],
  outdir: 'dist',
});

Promise.allSettled([ctx1.watch(), ctx2.watch()]);
