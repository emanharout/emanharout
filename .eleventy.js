const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles/css/");
  eleventyConfig.addWatchTarget("./source/styles/css/");
  eleventyConfig.addPassthroughCopy("./source/assets/");
  eleventyConfig.addWatchTarget("./source/assets/");
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false,
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  })
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
    
  // Markdownit and Footnote support
  let markdownIt = require("markdown-it");
  let markdownItFootnote = require("markdown-it-footnote");
  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  // configure the library with options
  let markdownLib =  markdownIt(options).use(markdownItFootnote);
  // set the library to process markdown files
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "source",
      includes: "_includes",
      output: "public"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
