import React from 'react';
import Title from '../../components/title/Title';
import PortfolioCards from '../../components/portfolioCards/PortfolioCards';

import './portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio">
      <Title>Мои работы</Title>
      <div className="portfolio__inner">
        <PortfolioCards />
      </div>
    </div>
  );
}

export default Portfolio;
