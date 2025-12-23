export {};

declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      action: string | Date,
      params?: Record<string, any>
    ) => void;
  }

  function gtag(
    command: "event" | "config" | "js",
    action: string | Date,
    params?: Record<string, any>
  ): void;
}
