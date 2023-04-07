import { BrowserWindow, ipcMain } from 'electron';
import { Channels } from '../channels';

export function setUpListenters(window: BrowserWindow) {
  ipcMain.on(Channels.SetTitle, (_, title) => window.setTitle(title));
}
