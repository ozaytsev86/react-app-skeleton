module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        modules: 'auto',
        runtime: 'automatic',
      }
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ]
}
