import { createContext } from "react";
import { ETheme } from "./types";

export type TThemeContext = {
    theme?: ETheme
    setTheme?: (theme: ETheme) => void
}

export const ThemeContext = createContext<TThemeContext>({})

export const THEME_LOCAL_STORAGE_KEY = 'theme'