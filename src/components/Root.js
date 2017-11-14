import React from 'react';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Footer from './Footer';

import menu from '../data/menu.json';
import services from '../data/services.json';
import portfolio from '../data/portfolio.js';
import teamData from '../data/team.js';
import iconsData from '../data/icons.json';



export default () => (
  <div>
    <Header
      menuList={menu}
      iconsData={iconsData}
    />
    <Services
      servicesList={services}
    />
    <Portfolio
      imgUrl={portfolio.imgUrl}
      title={portfolio.title}
      titleDescription={portfolio.titleDescription}
      description1={portfolio.description1}
      description2={portfolio.description2}
      showImgLeft={true}
      moreShow={true}
      moreUrl='#'
      moreLinkTitle='read more'
      moreShowArrow={true}
    />
    <Team
      teamData={teamData}
    />
    <Footer
      iconsData={iconsData}
    />
  </div>
);
