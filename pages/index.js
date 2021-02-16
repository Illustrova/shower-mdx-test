import fs from "fs";
import React, { useEffect, useRef } from "react";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import * as Components from "../components";
import absoluteUrl from "next-absolute-url";

const components = {
  section: Components.Slide,
  ...Components,
};

export default function Presentation({ content, frontMatter, origin }) {
  console.log("🚀 ~ file: index.js ~ line 14 ~ Presentation ~ origin", origin);
  const ref = useRef(null);

  useEffect(() => {
    // TODO: temporary hack to force keyboard events work, try to fix better
    const takeFocus = () => ref.current.focus();
    document.getElementById("__next").setAttribute("tabindex", "-1");
    document.getElementById("__next").addEventListener("focus", takeFocus);

    // TODO: temporary hack - adding class to body in order to get access to color variables, search for better solution
    document.body.className = "shower";
    return () => {
      document.getElementById("__next").removeEventListener("focus", takeFocus);
      document.body.className = "";
    };
  });

  return (
    <>
      <Components.Head {...frontMatter} origin={origin} />
      <div
        className="shower list"
        ref={ref}
        tabIndex="-1"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </>
  );
}

export const getInitialProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req);
  return { origin }
};

export const getStaticProps = async () => {
  const source = fs.readFileSync(`./index.mdx`);
  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        [require("remark-attr"), { enableAtxHeaderInline: false }],
        require("remark-sectionize"),
      ],
    },
    scope: data,
  });

  const presentationHeader = `
    <header class="caption">
      <h1>${data.title}</h1>
      ${data.subtitle && `<p>${data.subtitle}</p>`}
    </header>`;

  const presentationFooter = `${
    data.footer && data.footer
  }<div class="progress"></div>`;

  const presHtml =
    presentationHeader + mdxSource.renderedOutput + presentationFooter;

  return {
    props: {
      content: presHtml,
      frontMatter: data,
    },
  };
};
