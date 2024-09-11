const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            collapse_vars: false,
          },
        },
      }),
    ],
  },
})
