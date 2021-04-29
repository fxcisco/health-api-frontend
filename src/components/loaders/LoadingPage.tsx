import React, { ReactNode } from 'react';
import { SitePage } from '@/layout'

interface Props {
  children?: ReactNode;
}

export const LoadingPage = ({
  children,
}: Props) => {
  const defaultScreen = (
    <div
      className="loading-page loading-active"
      role="status"
    >
      <h1>Loading...</h1>
    </div>
  );

  return (
    <SitePage title="Loading">
      <div className="container">{children || defaultScreen}</div>
    </SitePage>
  );
};
