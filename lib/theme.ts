/**
 * Theme preference shared by the root layout's inline script and ThemeToggle.
 * Kept outside the "use client" module so the layout receives the real string.
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs during HTML parsing, before first paint. A saved choice wins; with no
 * saved choice the device's colour-scheme preference decides, so dark-mode
 * visitors never see a light flash. Server rendering starts from data-theme="light".
 */
export const themeScript = `(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){}if(t!=="light"&&t!=="dark")t=window.matchMedia&&matchMedia(${JSON.stringify(DARK_QUERY)}).matches?"dark":"light";d.dataset.theme=t})()`;
