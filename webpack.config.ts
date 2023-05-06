import * as webpack from 'webpack';

import { resolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WatchExternalFilesPlugin from 'webpack-watch-files-plugin';
import ImageminWebpWebpackPlugin from 'imagemin-webp-webpack-plugin';

const PugLintPlugin = require('puglint-webpack-plugin');

import i18n from './src/i18n';
import util from './src/util';

import pkg from './package.json';

type Language = keyof typeof i18n;

const getByLanguage = (l?: Language): webpack.Configuration => {
  const isRoot = typeof l === 'undefined';
  const language: Language = l || 'pt';

  const distPath = pkg.bundle;
  const outDir = isRoot ? resolve(__dirname, distPath) : resolve(__dirname, distPath, language);
  return {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: {
			main: './src/index.ts',
			style: './src/style.ts',
		},
    output: {
      path: outDir,
      filename: '[name].js',
    },
    devServer: {
      host: '0.0.0.0',
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: 'pug-loader',
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: [
            /node_modules/,
            /\.pug$/,
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.pug', '.tsx', '.ts', '.js'],
    },
    plugins: [
      new WatchExternalFilesPlugin({
        files: ['./src/**/*.ts',]
      }),
      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, './src', 'static'),
            to: resolve(__dirname, outDir),
          },
        ],
      }),
      new ImageminWebpWebpackPlugin(),
      new ESLintPlugin({}),
      new PugLintPlugin({
        context: 'src',
        files: '**/*.pug',
        config: Object.assign({emitError: true}, require('./.pug-lintrc.json'))
      }),
      new HtmlWebpackPlugin({
        inject: false,
        minify: true,
        template: './src/index.pug',
        get meta() {
          const file = './src/i18n';
          delete require.cache[require.resolve(file)];
          const { meta } = require(file).default[language];

          return {
            ...meta,
            charset: { charset: 'utf-8' },
            viewport: 'width=device-width, initial-scale=1',
          };
        },
        templateParameters: {
          get styles() {
            const file = './src/style';
            delete require.cache[require.resolve(file)];

            return require(file).default;
          },
          get args() {
            const file = './src/i18n';
            delete require.cache[require.resolve(file)];
            delete require.cache[require.resolve(file + '/' + language)];

            const { args } = require(file).default[language];

            return args;
          },
          util,
        },
      }),
    ],
  };
};

export default process.env.NODE_ENV === 'development' ? getByLanguage('en') : [getByLanguage(), getByLanguage('en')];
