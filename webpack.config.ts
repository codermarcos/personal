import { resolve } from 'path';
import * as webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const ESLintPlugin = require('eslint-webpack-plugin');
const PugLintPlugin = require('puglint-webpack-plugin');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

import i18n from './src/i18n';
import util from './src/util';

type Language = keyof typeof i18n;

const getByLanguage = (l?: Language): webpack.Configuration => {
  const isRoot = typeof l === 'undefined';
  const language: Language = l || 'pt';
  return {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
      filename: 'main.js',
      path: isRoot ? resolve(__dirname, 'dist') : resolve(__dirname, 'dist', language),
    },
    devServer: {
      host: '0.0.0.0',
      useLocalIp: true,
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
      new CleanWebpackPlugin(),           
      new CopyPlugin({
        patterns: [
          { 
            from: './src/static', 
            to: './',
          },
        ],
      }),
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

export default process.env.NODE_ENV === 'development' ? getByLanguage() : [getByLanguage(), getByLanguage('pt')];