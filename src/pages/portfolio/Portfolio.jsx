import React from 'react';
import PortfolioCards from '../../components/portfolioCards/PortfolioCards';

import './portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__inner">
        <PortfolioCards />
      </div>
    </div>
  );
}

export default Portfolio;
