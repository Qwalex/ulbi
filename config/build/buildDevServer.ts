import { TBuildOptions } from "./types/config"

export const buildDevServer = ({ port = 3000 }: TBuildOptions) => ({
    port,
    hot: true,
    open: true,
    historyApiFallback: true,
})