const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  
  // Konfigurasi Markdown
  const md = new markdownIt({
    html: true, // Izinkan HTML di dalam markdown
  });
  eleventyConfig.setLibrary("md", md);

  // Return your Object options:
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site" // Folder output hasil build
    }
  };
};