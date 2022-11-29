module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles/css/");
  eleventyConfig.addWatchTarget("./source/styles/css/");

  return {
    dir: {
      input: "source",
      output: "public"
    }
  };
};