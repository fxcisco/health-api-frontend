import { NavLink } from '@/components/navigation';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface Props {}

const FeaturedItem = ({ img, title, description, link }) => {
  return (
    <div className="features-item">
      <h3 className="item-title">{title}</h3>

      <div className="item-split">
        <img src={img} alt={title} />
        <div className="item-text">
          <h5>{title}</h5>
          <p>{description}</p>

          <div className="item-actions">
            <NavLink
              href={link}
              className="link-btn btn-primary-outline"
            >
              View <BsArrowRight className='mxl-1' />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LandingFeatures = () => {
  return (
    <div id="services" className="container">
      <div className="features-banner-split">
        <div className="banner-img">
          <img src="/images/site/site-brand.png" alt="company brand" />
        </div>

        <div className="banner-text">
          <h4>HealthRX</h4>
          <h3>Medical Service Provider</h3>
          <p>
            Providing high-quality health care services to increase relationships between patients and their care providers.
          </p>
        </div>
      </div>

      <div className="landing-features">
        <ul>
          
          <li id='project-music'>
            <FeaturedItem
              link='/doctors'
              img="/images/site/phone-doctor.jpg"
              title="View Appointments"
              description="Schedule an appointment with a local health specialist"
            />
          </li>

          <li id="project-pages">
            <FeaturedItem
              link='/drugs'
              img="/images/site/pills-sorted.jpg"
              title="Drug Information"
              description="Find information on both Prescription and OTC medications"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
