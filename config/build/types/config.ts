export type TBuildWebpackConfigParams = {
    paths: {
        root: string,
        src: string,
        public: string,
    }
}

export type TEnviroments = {
    mode: 'production' | 'development'
    port?: number
}

export type TBuildOptions = {
    isDevMode: boolean
} & TEnviroments & TBuildWebpackConfigParams