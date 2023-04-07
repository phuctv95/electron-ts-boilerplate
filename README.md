# Electron TypeScript Boilerplate

A boilterplate of Electron that:

- Use TypeScript.
- Use pnpm.
- Use esbuild.
- Support hot reload for renderer.
- Constant channels.

Main files:

```
src/
    main/
        main.ts
    renderer/
        renderer.ts
    preloader.ts
```

How to use:

1. Run `pnpm run watch-renderer` to build and watch the renderer process.
2. Then, run `pnpm run start-electron` to start the app (changing the main process code needs to rerun this command).
