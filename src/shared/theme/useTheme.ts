import { useContext } from "react"
import { ThemeContext, THEME_LOCAL_STORAGE_KEY } from "./themeContext"
import { ETheme } from "./types"

type TUseThemeResult = {
    theme: ETheme
    toggleTheme: () => void
}

export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}