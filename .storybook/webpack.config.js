const path = require('path')

module.exports = async ({ config }) => {
  console.log(__dirname)
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        }
      },
      'postcss-loader'
    ]
  })
  config.resolve.alias.components = path.resolve(__dirname, 'components')
  return config
}
