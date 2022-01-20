/** @format */

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css";
import { Typography } from "@material-ui/core";
import "../../../App.css";

function Testinonials() {
  return (
    <div className="main-root">
      <Typography variant="h6" className="feedback">
        CUSTOMER FEEDBACK
      </Typography>
      <Typography variant="h3" className="customerSays">
        What Our Customers Say About John..
      </Typography>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className="smoothScroll"
      >
        <div>
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Incomebomb has assembled an expert team of Amazon experts, Front
              End Web Developers, WordPress developers.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Testinonials;
