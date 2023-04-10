import * as path from 'path';
import * as chokidar from 'chokidar';
import { BrowserWindow } from 'electron';
import { debounce } from 'lodash';

const rootPath = process.env.PWD!;

export const preloadFilePath = path.join(rootPath, 'dist/preload.js');
export const rendererFolderPath = path.join(rootPath, 'dist/renderer');
export const rendererHtmlFilePath = path.join(
  rendererFolderPath,
  'renderer.html'
);

export function watchRenderer(window: BrowserWindow) {
  chokidar.watch(rendererFolderPath).on(
    'all',
    debounce(() => {
      window.loadURL(fileUriScheme(rendererHtmlFilePath));
    }, 100)
  );
}

export function fileUriScheme(filePath: string) {
  return `file://${filePath}`;
}
