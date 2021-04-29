import React from 'react';
import { AlertSystem } from './AlertSystem';
import { NotificationSystem } from './NotificationSystem';
import { MainFooter, MainHeader } from './SiteElements';

export const SiteLayout = ({ children }) => {
  return (
    <div className={`site-layout`}>
      <MainHeader />
      <AlertSystem />
      <NotificationSystem />

      {children}
      <MainFooter />
    </div>
  );
};
