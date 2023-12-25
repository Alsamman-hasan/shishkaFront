import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { IBuildOptioins } from '../types/config';

interface buildBabelLoaderProps extends IBuildOptioins {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderProps) {
  return {
    exclude: /node_modules/,
    test: isTsx ? /\.(js|jsx|tsx)$/ : /\.(js|ts)$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheCompression: false,
        cacheDirectory: true,
        compact: !isDev,
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx &&
            !isDev && [
              babelRemovePropsPlugin,
              {
                props: ['data-testid'],
              },
            ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
        presets: ['@babel/preset-env'],
      },
    },
  };
}
