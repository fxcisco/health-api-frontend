import React from 'react';
import { SitePage } from '@/layout';
import { LandingFeatures } from './components/LandingFeatures';
import { LandingContact } from './components/LandingContact';
import { UserNavbar } from '@/layout/SiteElements/UserNavbar';
import { LandingNews } from './components/LandingNews';

interface Props {}

export const Landing = (props: Props) => {
  return (
    <SitePage title="Projects" className="sitepage--projects">
      <UserNavbar />

      <LandingFeatures />
      <LandingNews />
      <LandingContact />
    </SitePage>
  );
};
