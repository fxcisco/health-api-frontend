import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

export const OgBasic = ({ title, description, url, imageUrl }: Props) => {
  title = title || 'Health Rx';
  description = description || 'Helping Medical Professionals stay connected with their patients.';
  imageUrl = imageUrl || '/images/site/site-brand.png';
  url = url || 'https://fxcisco.com'

  return (
    <Head>
      <meta key='og:type' property="og:type" content="article" />
      {url && <meta key='og:url' property="og:url" content={url} />}
      {title && (
        <>
          <meta key='og:title' property="og:title" content={title} />
          <meta key='twitter:title' name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
        <meta key='og:description' property="og:description" content={description} />
        <meta key='twitter:description' name="twitter:description" content={description} />
        </>
      )}
      <meta key='twitter:card' name="twitter:card" content="summary_large_image" />
      {imageUrl && (
        <>
        <meta key='og:image' property="og:image" content={imageUrl} />
        <meta key='twitter:image' name="twitter:image" content={imageUrl} />
        <meta key='og:image:width' property="og:image:width" content="600" />
        <meta key='og:image:height' property="og:image:height" content="314" />
        <meta key='twitter:image:alt' name="twitter:image:alt" content={title} />
        </>
      )}
      {/* 300 x 157 for twitter */}
      {/* <meta name="twitter:site" content="@healthrx" /> */}
    </Head>
  );
};
