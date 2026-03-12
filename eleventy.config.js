import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // Copy assets/ (at project root) verbatim to _site/assets/
  // Path is relative to PROJECT ROOT, not src/ — this is correct for assets/ at root
  eleventyConfig.addPassthroughCopy("assets");

  // Copy favicon.svg (at project root) to _site/favicon.svg
  eleventyConfig.addPassthroughCopy("favicon.svg");

  // Watch assets/ during dev — assets live outside src/, so Eleventy won't auto-watch them
  eleventyConfig.addWatchTarget("assets/");

  // Format YAML dates as "Month DD, YYYY" — timeZone: UTC prevents off-by-one on UTC-offset servers
  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  );

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "articles",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "The Retiree Report",
      subtitle: "Medicare and retirement clarity for people 65+.",
      base: "https://retiree.report/",
      author: {
        name: "The Retiree Report",
      },
    },
  });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    layouts: "_includes/layouts",
  },
  templateFormats: ["njk", "html", "md"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
