const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  assetPrefix: "/shower-mdx-test/",
 basePath: "/shower-mdx-test"
});
