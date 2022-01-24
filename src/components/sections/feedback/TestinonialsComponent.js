/** @format */

import { Grid } from "@material-ui/core";
import React from "react";
import Testinonials from "./Testinonials";
import "../../../components/sections/sections.css";
import Roll from "react-reveal/Roll";
import "../../../App.css";
import testimonail from "../../../assets/testimonail.svg";

function TestinonialsComponent() {
  return (
    <div className="testinonials " id="testinonials">
      <Roll right>
        <Grid
          container
          spacing={10}
          className="grid-container testinonials-wraper"
        >
          <Grid>
            <img src={testimonail} alt="not found" />
          </Grid>
          <Grid className="testimonial-right">
            <Testinonials />
          </Grid>
        </Grid>
      </Roll>
    </div>
  );
}

export default TestinonialsComponent;
