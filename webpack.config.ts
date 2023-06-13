import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default buildWebpackConfig({
    paths: {
        root: path.resolve(__dirname),
        src: path.resolve(__dirname, 'src'),
        public: path.relative(__dirname, 'public')
    }
})