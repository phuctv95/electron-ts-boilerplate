import * as path from 'path';
import * as chokidar from 'chokidar';
import { BrowserWindow } from 'electron';

const rootPath = process.env.PWD!;

export const preloadFilePath = path.join(rootPath, 'dist/preload.js');
export const rendererHtmlFilePath = path.join(rootPath, 'dist/renderer.html');
export const rendererJsFilePath = path.join(rootPath, 'dist/renderer.js');
export const rendererCssFilePath = path.join(rootPath, 'dist/renderer.css');

export function watchRenderer(window: BrowserWindow) {
  chokidar
    .watch([rendererHtmlFilePath, rendererJsFilePath, rendererCssFilePath])
    .on('change', () => window.loadURL(rendererHtmlFilePath));
}
