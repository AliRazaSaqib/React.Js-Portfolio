/** @format */

import { Typography } from "@material-ui/core";
import React from "react";
import CarouselImages from "./slider/CarouselImages";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Typography variant="h6" className="myPortfolio">
        MY PORTFOLIO
      </Typography>
      <Typography variant="h3" className="latestWork">
        Some Of My Latest Works
      </Typography>
      <CarouselImages />
    </div>
  );
};

export default Portfolio;
