/** @format */

import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "../../components/banner/banner.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import banner from "../../assets/bannerImage.svg";

function Banner() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 40,
      backDelay: 6000,
      strings: ["Web Development", "React", "HTML", "CSS", "JS", "Bootstrap"],
    });
  }, []);
  return (
    <div className="main-wraper" id="home">
      <div className="banner-bg">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>

        <Grid
          container
          spacing={10}
          className="grid-container banner_container"
        >
          <Grid className="banner-left">
            <Typography className="heading">
              Hey there! I'm <span className="name">Ali Raza</span>
            </Typography>
            <Typography className="typo">
              Expert In <span className="name" ref={textRef}></span>
            </Typography>
            <Button className="hire-btn">
              <a href="#contact">Contact</a>
            </Button>
          </Grid>
          <Grid>
            <img src={banner} />
          </Grid>
        </Grid>
      </div>

      <div className="sidebar-social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100006145513818&_rdc=1&_rdr"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://twitter.com/AliRaza55795782"
          className="fa fa-twitter"
        ></a>
        <a href="https://www.incomebomb.com/" className="fa fa-globe"></a>
        <a
          href="https://www.linkedin.com/in/ali-raza-7689901a7/"
          className="fa fa-linkedin"
        ></a>
      </div>
    </div>
  );
}

export default Banner;
