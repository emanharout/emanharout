module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles/css/");
  eleventyConfig.addWatchTarget("./source/styles/css/");
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false,
  });

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