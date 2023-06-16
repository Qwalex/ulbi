import { RuleSetRule } from 'webpack'
import { TBuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = ({ isDevMode }: TBuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: isDevMode
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]'
            },
        }
      },
      "sass-loader",
    ],
  }
  
  return [
    styleLoader,
    typescriptLoader,
  ]
}