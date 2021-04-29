import React from 'react';
import { NavLink } from '@/components/navigation';


export const SiteNavbar = () => {

  return (
    <nav className="navbar-main">
      <div className="site-logo">
        <NavLink className='logo-link'>HealthRX</NavLink>
      </div>
    </nav>
  );
};
