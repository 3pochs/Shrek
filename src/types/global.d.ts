interface Window {
  gtag: (
    command: 'event' | 'config',
    action: string,
    params?: {
      page_path?: string;
      page_title?: string;
      [key: string]: any;
    }
  ) => void;
} 