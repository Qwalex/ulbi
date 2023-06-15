import { FC, ReactNode, useState } from 'react'
import { ThemeContext, THEME_LOCAL_STORAGE_KEY } from "./themeContext"
import { ETheme } from './types'

type TThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider: FC<TThemeProviderProps> = ({ children }) => {
    const [ theme, setTheme ] = useState<ETheme>(localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ETheme ?? ETheme.LIGHT)

    const defaultProps = {
        theme,
        setTheme,
    }

    return (
        <ThemeContext.Provider value={defaultProps}>
            { children }
        </ThemeContext.Provider>
    )
}