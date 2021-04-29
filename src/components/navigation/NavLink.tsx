import React, { ReactNode } from 'react';
import NextLink from 'next/link';

interface NavLinkProps {
  href?: string;
  as?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const NavLink = ({
  href = '/',
  as,
  className = '',
  disabled,
  children,
}: NavLinkProps) => {
  if(disabled) {
    return (
      <button className='link-disabled' disabled={true}>{children}</button>
    )
  }

  return (
    <NextLink href={href} {...{ as }}>
      <a className={`nav-link ${className}`}>{children}</a>
    </NextLink>
  );
};
