/**
 * Theme preference shared by the root layout's inline script and ThemeToggle.
 * Kept outside the "use client" module so the layout receives the real string.
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs during HTML parsing, before first paint, so a saved dark preference
 * never flashes light. Server rendering always starts from data-theme="light".
 */
export const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`;
