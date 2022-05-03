const isProduction = process.env.NODE_ENV === 'production';

const htmlMinTransform = require('./src/transforms/html-min-transform.js')

module.exports = config => {
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform)
  }

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');

  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};