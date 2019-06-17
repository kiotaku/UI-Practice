module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'last 2 versions'
    }),
    require('autoprefixer')({
      grid: true,
      browsers: 'last 2 versions'
    }),
    require('postcss-nested')
  ]
}
