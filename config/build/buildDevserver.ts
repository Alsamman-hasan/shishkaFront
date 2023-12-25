import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptioins } from './types/config';

export function buildDevServer(
  options: IBuildOptioins,
): DevServerConfiguration {
  return {
    allowedHosts: options.isDev ? 'all' : undefined,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: options.port,
  };
}
