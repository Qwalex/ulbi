import { useContext } from "react"
import { ThemeContext } from "./themeContext"
import { ETheme } from "./types"

type TUseThemeResult = {
    theme: ETheme
    toggleTheme: () => void
}

export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT)
    }

    return {
        theme,
        toggleTheme,
    }
}