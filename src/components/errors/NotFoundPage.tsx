import React, { ReactNode } from 'react';
import { SitePage } from '@/layout';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from '../navigation';
import { OgBasic } from '../opengraph';

interface Props {
  children?: ReactNode;
}

export const NotFoundPage = ({ children }: Props) => {
  const defaultContent = (
    <React.Fragment>
      <h1 className="r-md">Content Not Found</h1>
      <NavLink href="/" className="link-error">
        <BsArrowLeft/> to civilization
      </NavLink>
    </React.Fragment>
  );

  return (
    <SitePage title="Not Found | 404">
      <OgBasic
        title="Error | 404"
        description="This is not the page you want."
      />
      <div className="error-page">{children || defaultContent}</div>
    </SitePage>
  );
};
