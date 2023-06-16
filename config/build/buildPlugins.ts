import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { TBuildOptions } from './types/config'

export const buildPlugins = ({ paths }: TBuildOptions): Configuration['plugins'] => {
    const { public: publicPath } = paths

    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(publicPath, 'index.html'),
        }),
        new webpack.ProgressPlugin(),
    ]
}