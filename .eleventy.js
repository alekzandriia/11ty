// Define location of source files & public files (See: https://www.11ty.dev/docs/config/)
module.exports = function(eleventyConfig) {
// Pass through additional items that are not passed by default
  eleventyConfig.addPassthroughCopy('./src/styles.css')
  eleventyConfig.addPassthroughCopy('./src/assets')

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};