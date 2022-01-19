/** @format */

import React from "react";
import { AppBar, Toolbar, Typography, Grid, Paper } from "@material-ui/core";
import "../../components/footer/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => (
  <div className="footer">
    <Grid className="grid">
      <Grid
        container
        item
        sm={12}
        xs={12}
        md={12}
        lg={12}
        xlg={12}
        justify="space-between"
        className="footer-grid"
      >
        <Grid
          item
          sm={6}
          xs={12}
          md={6}
          lg={6}
          clg={6}
          className="social-icons-grid"
        >
          <div className="social-icon">
            <Paper className="social">
              <FacebookIcon className="svg-icon" />
            </Paper>
            <Paper className="social">
              <LinkedInIcon className="svg-icon" />
            </Paper>
            <Paper className="social">
              <TwitterIcon className="svg-icon" />
            </Paper>
            <Paper className="social">
              <LanguageIcon className="svg-icon" />
            </Paper>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} md={6} lg={6} clg={6} className="para-grid">
          <Typography className="paragrapgh">
            Made with love by Ali Raza <br />
            <span>© 2020 - ALL RIGHTS RESERVED</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
