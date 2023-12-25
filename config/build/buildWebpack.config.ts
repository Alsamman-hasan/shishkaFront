import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevserver';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolve';
import { IBuildOptioins } from './types/config';

export function buildWebpackConfig(options: IBuildOptioins): Configuration {
  const { mode, paths, isDev } = options;
  return {
    cache: {
      allowCollectingMemory: true,
      idleTimeout: 60000,
      maxAge: 31536000,
      memoryCacheUnaffected: true,
      type: 'filesystem',
    },

    // devtool: "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,

    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

    entry: paths.entry,

    mode,

    module: {
      rules: buildLoaders(options),
    },
    optimization: {
      mergeDuplicateChunks: true,
      minimize: !isDev,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      removeAvailableModules: true,
      sideEffects: true,
    },
    output: {
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true,
      filename: '[name].[contenthash].js',
      path: paths.build,
      publicPath: '/',
    },
    performance: {
      maxAssetSize: 100000,
    },
    plugins: buildPlugins(options),
    resolve: buildResolves(options),
  };
}
