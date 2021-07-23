import path from 'path';
import * as webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

import i18n from './src/i18n';
import util from './src/util';

const getByLanguage = (lang: keyof typeof i18n): webpack.Configuration => {
  return {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist', lang),
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
          test: /\.tsx?$/,
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
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: './src/static', to: './' },
        ],
      }),
      new HtmlWebpackPlugin({
        inject: false,
        minify: true,
        template: './src/index.pug',
        get meta() {
          const file = './src/i18n';
          delete require.cache[require.resolve(file)];
          const { meta } = require(file).default[lang];

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
            delete require.cache[require.resolve(file + '/pt')];

            const { args } = require(file).default[lang];

            return args;
          },
          util,
        },
      }),
    ],
  };
};

export default [getByLanguage('pt')];