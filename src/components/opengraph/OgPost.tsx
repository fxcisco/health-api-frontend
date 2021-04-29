import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export const OgPost = ({ title, description, url, imageUrl }: Props) => {
  return (
    <Head>
      <meta property="og:type" content="article" />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* 600x315 Image for Facebook */}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="314" />


      {/* 300 x 157 for twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
    </Head>
  );
};
