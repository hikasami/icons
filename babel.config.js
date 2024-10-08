module.exports = {
  assumptions: {
    objectRestNoSymbols: true,
  },
  env: {
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/preset-react',
        '@babel/typescript',
      ],
    },
    cjs: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/typescript',
      ],
    },
  },
  plugins: ['@babel/plugin-transform-runtime'],
}