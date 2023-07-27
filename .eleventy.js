// Format Dates
const { DateTime } = require("luxon")

// Define location of source files & public files (See: https://www.11ty.dev/docs/config/)
module.exports = function(eleventyConfig) {
// Pass through additional items that are not passed by default
  eleventyConfig.addPassthroughCopy('./src/styles.css')
  eleventyConfig.addWatchTarget('./src/styles.css')
  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy('./src/manifest.json')
  eleventyConfig.addPassthroughCopy('./src/robots.txt')
  eleventyConfig.addPassthroughCopy('./src/index.js')
  eleventyConfig.addPassthroughCopy('./src/sw.js')

  // Specify Date Format
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};