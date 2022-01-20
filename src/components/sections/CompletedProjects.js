/** @format */

import { Typography, Grid, Paper } from "@material-ui/core";
import React from "react";
import "../../components/sections/sections.css";
function CompletedProjects() {
  return (
    <div className="projects" id="about">
      <Grid
        container
        spacing={10}
        className="grid-container completeProjects services"
      >
        <Grid className="services-sec service-right">
          <Typography className="smallText" variant="h6">
            MY FEATURED SKILLS
          </Typography>
          <Typography variant="h2" className="inovative">
            Some Interesting Facts About Me.
          </Typography>
          <Typography variant="h6" className="developer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            fugiat quod odit ab aperiam? Animi perspiciatis ut sed odio
            provident recusandae fuga. Aspernatur, rerum nihil. Aut odit
            deleniti minima id!
          </Typography>

          <div className="countdown">
            <div className="list">
              <div className="noOfProjects">10</div>
              <div className="showCase">Project</div>
            </div>
            <div className="list">
              <div className="noOfProjects">100</div>
              <div className="showCase">Design</div>
            </div>
            <div className="list">
              <div className="noOfProjects">110</div>
              <div className="showCase">Thinking</div>
            </div>
            <div className="list">
              <div className="noOfProjects">10</div>
              <div className="showCase">Support</div>
            </div>
          </div>
        </Grid>
        <Grid>
          <img src="/assets/facts.svg" />
        </Grid>
      </Grid>
    </div>
  );
}

export default CompletedProjects;
