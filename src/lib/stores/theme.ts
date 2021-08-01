import { writable } from "svelte-local-storage-store";

const themes = ["light", "dark", "emerald", "amber"] as const;
type Theme = typeof themes[number];

// Default theme.
const defaultTheme: Theme = "light"

// Theme value.
const theme = writable<Theme>("theme", defaultTheme);

export { themes, theme };
export type { Theme }
