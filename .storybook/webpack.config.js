const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.splice(2, 1)
  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, '../'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      },
      'postcss-loader'
    ]
  })
  config.resolve.alias.components = path.resolve(__dirname, '../components')
  return config
}
