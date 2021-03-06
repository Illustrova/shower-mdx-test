const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  assetPrefix: `/${process.env.REPO_NAME}/`,
 basePath: `/${process.env.REPO_NAME}`,
   publicRuntimeConfig: {
    "DEPLOY_URL": process.env.DEPLOY_URL,
  }
});
