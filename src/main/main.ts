// @ts-ignore
import { app, BrowserWindow } from 'electron';
import { preloadFilePath, rendererHtmlFilePath, watchRenderer } from './core';
import { setUpListenters } from './listeners';

app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadFilePath,
    },
  });

  window.loadURL(rendererHtmlFilePath);
  watchRenderer(window);
  setUpListenters(window);
});
