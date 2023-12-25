import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpack.config';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    envPath: path.resolve(__dirname, './.env'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    icon: path.resolve(__dirname, 'public', 'logo64.png'),
    indexCss: path.resolve(__dirname, 'public', 'index.css'),
    logo192: path.resolve(__dirname, 'public', 'logo192.png'),
    manifest: path.resolve(__dirname, 'public', 'manifest.json'),
    public: path.resolve(__dirname, 'public'),
    robots: path.resolve(__dirname, 'public', 'robots.txt'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  // const apiUrl = env.apiUrl || 'https://api.шишкамаркет.рф/front/';
  const apiUrl = env.apiUrl || 'http://94.26.249.184:8000/front';
  const PORT = env.port || 3000;
  const publicUrl = env.publicUrl || `http://localhost:${PORT}`;

  const config: webpack.Configuration = buildWebpackConfig({
    apiUrl,
    isDev,
    mode,
    paths,
    port: PORT,
    publicUrl,
  });

  return config;
};
