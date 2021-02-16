import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
console.log("🚀 ~ file: Head.js ~ line 7 ~ publicRuntimeConfig", publicRuntimeConfig);
const {DEPLOY_URL} = publicRuntimeConfig
console.log("🚀 ~ file: Head.js ~ line 8 ~ DEPLOY_URL", DEPLOY_URL);

const loadTheme = (name) => {
  switch (name) {
    case "material":
      import("@shower/material/styles/styles.css");
      break;
    case "ribbon":
    default:
      import("@shower/ribbon/styles/styles.css");
  }
};

const Head = ({ title, description, style, meta, theme }) => {
  const url = DEPLOY_URL;
  console.log("🚀 ~ file: Head.js ~ line 18 ~ Head ~ url", url);
  loadTheme(theme);
  const router = useRouter();

  
  console.log("==>", `${JSON.stringify(process.env, 0, 2)}`)
  return (
    <NextHead>
      {/* General tags */}
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {description && <meta name="description" content={description} />}
      {/* OpenGraph tags */}
      <meta property="og:url" content={router.pathname} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {/* {meta?.cover && (
        <meta property="og:image" content={url + "/" + meta.cover} />
      )} */}
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />

      {meta?.twitter && <meta name="twitter:creator" content={meta.twitter} />}
      {meta?.twitter && <meta name="twitter:site" content={meta.twitter} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {meta?.cover && (
         <meta name="twitter:image" content={url + "/" + meta.cover} />
      )}
      <meta name="twitter:image:alt" content={title} />
      <style>
        {`
          body {
            background-color: var(--color-grey);
          }
            .shower {
              --slide-ratio: calc(16 / 9);
            }
          ${style}`}
      </style>
    </NextHead>
  );
};
Head.defaultProps = {
  title: "My Awesome Presentation",
};
export default Head;
