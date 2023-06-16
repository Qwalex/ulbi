import { Configuration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import path from 'path'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolver'
import { buildDevServer } from './buildDevServer'
import { TBuildWebpackConfigParams, TEnviroments } from './types/config'

const devServer: WebpackDevServerConfiguration = {}

export const buildWebpackConfig = (options: TBuildWebpackConfigParams) => (env: TEnviroments) => {
    const {
        paths: {
            root,
            src,
        }
    } = options

    const isDevMode = env.mode !== 'production'

    const localOptions = {
        ...options,
        ...env,
        isDevMode,
    }

    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(src, 'app', 'AppEntry.tsx'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(root, 'build'),
            clean: true         
        },
        module: {
            rules: buildLoaders(localOptions),
        },
        resolve: buildResolvers(localOptions),
        plugins: buildPlugins(localOptions),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(localOptions) : undefined
    }
}