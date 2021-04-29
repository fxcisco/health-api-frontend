import React, { useState } from 'react';
import { ButtonToggle } from '@/components/buttons/ButtonToggle';


export const UserNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  

  return (
    <nav className="page-navbar">
      <ButtonToggle show={toggle} onClick={handleClick} />
      <ul className={`${toggle ? 'active' : ''}`}>
        <li>
          <a onClick={handleClick} href="/#services">
            Services
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
