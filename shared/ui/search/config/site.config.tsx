// import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

import logoIconImg from "@public/logo-short.svg";
import { LAYOUT_OPTIONS } from "@/config/enums";
import logoImg from "@public/logo.svg";
// import { Metadata } from "next";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "통합AI검색플랫폼",
  description: `통합AI검색플랫폼`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  // openGraph?: OpenGraph,
  description: string = siteConfig.description
) => {
  return {
    title: title ? `${title} - 통합AI검색플랫폼 ` : siteConfig.title,
    description,
    // openGraph: openGraph ?? {
    //   title: title ? `${title} - 통합AI검색플랫폼 ` : title,
    //   description,
    //   url: 'https://isomorphic-furyroad.vercel.app',
    //   siteName: '통합AI검색플랫폼 ', // https://developers.google.com/search/docs/appearance/site-names
    //   images: {
    //     url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',
    //     width: 1200,
    //     height: 630,
    //   },
    //   locale: 'en_US',
    //   type: 'website',
    // },
  };
};
