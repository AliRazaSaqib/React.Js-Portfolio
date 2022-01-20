/** @format */

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import "./sections.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Services = () => {
  return (
    <div className="services-wraper" id="services">
      <Fade left>
        <Grid container spacing={10} className="grid-container services">
          <Grid>
            <img src="/assets/services.png" />
          </Grid>
          <Grid className="services-sec service-right">
            <Typography className="smallText" variant="h6">
              WHAT I DO ?
            </Typography>
            <Typography variant="h2" className="inovative">
              Innovative Solutions To Grow Your Creative Projects
            </Typography>
            <Typography variant="h6" className="developer">
              My-Self Ali Raza junior frontend web developer having experience
              in below technologies:
            </Typography>
            <ul>
              <li>
                <ArrowForwardIcon className="arrow" />
                HTML
              </li>

              <li>
                <ArrowForwardIcon className="arrow" />
                CSS3
              </li>

              <li>
                <ArrowForwardIcon className="arrow" />
                JavaScript
              </li>

              <li>
                <ArrowForwardIcon className="arrow" />
                Bootstrap
              </li>

              <li>
                <ArrowForwardIcon className="arrow" />
                React
              </li>
            </ul>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
};

export default Services;
