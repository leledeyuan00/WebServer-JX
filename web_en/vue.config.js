module.exports = {
  outputDir: __dirname + '/../server/web_en',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/en/'
    : '/'
}