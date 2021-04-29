import { SitePage } from '@/layout';
import React, { ReactNode } from 'react';
import { OgBasic } from '../opengraph';

interface Props {
  statusCode?: number;
  children?: ReactNode;
  title?: string;
  text?: string;
}

export const ErrorPage = ({ title, text, children, statusCode }: Props) => {
  const renderContent = () => {
    if (children) {
      return children;
    }
    if (text) {
      return <h1 className="r-md">{text}</h1>;
    }
    return <h1 className="r-md">Invalid Request</h1>;
  };

  return (
    <SitePage title={title || 'Error | 400'}>
      <OgBasic title="Error 404" description="This is not the page you want." />
      <div className="container error-page">
        {renderContent()}
        <h6>{statusCode}</h6>
      </div>
    </SitePage>
  );
};
