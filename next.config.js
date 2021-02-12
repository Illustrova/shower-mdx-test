const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
      assetPrefix: "https://illustrova.github.io/shower-mdx-test/",

});
