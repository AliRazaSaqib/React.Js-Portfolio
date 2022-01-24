/** @format */

import React from "react";
import { Carousel } from "..";
import blurbgeek from "../../../assets/portfolio/blurbgeek.PNG";
import resturant from "../../../assets/portfolio/resturant.png";
import template from "../../../assets/portfolio/template.PNG";
import veta from "../../../assets/portfolio/veta-music.PNG";
import callCenter from "../../../assets/portfolio/call-center.png";
import fishkeeping from "../../../assets/portfolio/fishkeeping.PNG";
import incomebomb from "../../../assets/portfolio/incomebomb.PNG";
import perPortfolio from "../../../assets/portfolio/perPortfolio.png";
import Portfolio1 from "../../../assets/portfolio/portfolio-1.png";
import Portfolio2 from "../../../assets/portfolio/portfolio-2.png";

function CarouselImages() {
  const data = [
    {
      image: `${blurbgeek}`,

      caption: `<div>
        Blog Wesbite<br/>
      </div>`,
    },
    {
      image: `${resturant}`,
      caption: `<div>
        Resturant Website<br/>
      </div>`,
    },

    {
      image: `${template}`,
      caption: `<div>
        Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: `${veta}`,
      caption: `<div>
       Veta Music Application<br/>
      </div>`,
    },
    {
      image: `${callCenter}`,
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: `${fishkeeping}`,
      caption: `<div>
        Blog Website<br/>
      </div>`,
    },
    {
      image: `${incomebomb}`,
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: `${perPortfolio}`,
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: `${Portfolio1}`,
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: `${Portfolio2}`,
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselImages;
