export interface PreloadApi {
  setTitle: (title: string) => void;
}

declare global {
  interface Window {
    preloadApi: PreloadApi;
  }
}
