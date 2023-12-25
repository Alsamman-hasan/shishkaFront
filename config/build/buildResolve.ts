import { ResolveOptions } from 'webpack';
import { IBuildOptioins } from './types/config';

export function buildResolves(options: IBuildOptioins): ResolveOptions {
  return {
    alias: {
      '@': options.paths.src,
    },

    extensions: ['.tsx', '.ts', '.js'],

    mainFiles: ['index'],
    //
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
  };
}
