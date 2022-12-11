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