import path from 'path'
import { TBuildOptions } from './types/config'

export const buildResolvers = ({ paths }: TBuildOptions) => {
    const { src } = paths

    return {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path.resolve(src), 'node_modules'],
        alias: {}
    }
}