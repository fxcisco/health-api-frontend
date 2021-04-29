import React, { useEffect, ReactNode } from 'react';
import Head from 'next/head';
import { OgBasic } from '@/components/opengraph';

interface SitePageProps {
  title: string;
  children: ReactNode;
  className?: string;
  sidebars?: boolean;
  noscroll?: boolean;
  nometa?: boolean;
}

export const SitePage = ({
  title = '',
  className = '',
  children,
  sidebars,
  nometa,
  noscroll
}: SitePageProps) => {
  useEffect(() => {
    if (title) document.title = `${title}`;
  }, [title]);
  useEffect(() => {
    if(!noscroll) window.scrollTo(0, 0);
  }, []);

  if(sidebars) className='w-sides'
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width"
        />
        
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="data:,"></link>
        <title>{title}</title>
      </Head>
      {!nometa && <OgBasic />}
      <main className={`page-layout ${className}`}>
        {children}
      </main>
    </>
  );
};
