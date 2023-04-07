import { contextBridge, ipcRenderer } from 'electron';
import { Channels } from './channels';
import { PreloadApi } from './types';

contextBridge.exposeInMainWorld('preloadApi', {
  setTitle: (title) => ipcRenderer.send(Channels.SetTitle, title),
} as PreloadApi);
