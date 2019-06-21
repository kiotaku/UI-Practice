module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0
    }),
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-for'),
    require('postcss-nested')
  ]
}
