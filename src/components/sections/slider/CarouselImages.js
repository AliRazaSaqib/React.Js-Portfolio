/** @format */

import React from "react";
import { Carousel } from "..";

function CarouselImages() {
  const data = [
    {
      image: "/assets/portfolio/blurbgeek.png",
      caption: `<div>
        Blog Wesbite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/resturant.png",
      caption: `<div>
        Resturant Website<br/>
      </div>`,
    },

    {
      image: "/assets/portfolio/template.png",
      caption: `<div>
        Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/veta-music.png",
      caption: `<div>
       Veta Music Application<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/call-center.png",
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/fishkeeping.png",
      caption: `<div>
        Blog Website<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/incomebomb.png",
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/perPortfolio.png",
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/portfolio-1.png",
      caption: `<div>
      Portfolio Webbsite<br/>
      </div>`,
    },
    {
      image: "/assets/portfolio/portfolio-2.png",
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
