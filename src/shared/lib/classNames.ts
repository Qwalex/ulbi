type TClassNames = (classNames: string[], modifiers?: Record<string, boolean>) => string

export const classNames: TClassNames = (classNames, modifiers = {}) => {
    return [...classNames, ...Object.entries(modifiers).filter(([key, value]) => value).map(([key]) => key)].join(' ')
}