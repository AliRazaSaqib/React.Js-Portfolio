/** @format */

import { Typography, Grid } from "@material-ui/core";
import "../../components/contact/contact.css";
import "../../components/sections/sections.css";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from "@material-ui/icons/Language";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="projects" id="contact">
      <Grid
        container
        spacing={10}
        className="grid-container completeProjects services contact-form"
      >
        <Grid className="services-sec service-right">
          <Typography className="smallText" variant="h6">
            GET IN TOUCH
          </Typography>
          <Typography variant="h2" className="inovative">
            Talk Or Meet With Me
          </Typography>

          <div className="contact-wraper">
            <div className="contact">
              <PhoneIcon className="icon" />
              <div>
                <Typography className="call">Call Me Now</Typography>
                <Typography className="number">+92307 7534255</Typography>
              </div>
            </div>
            <div className="contact">
              <AlternateEmailIcon className="icon" />
              <div>
                <Typography className="call">Email</Typography>
                <Typography className="number">raza80540@gmail.com</Typography>
              </div>
            </div>
            <div className="contact">
              <LanguageIcon className="icon" />
              <div>
                <Typography className="call">Website</Typography>
                <Typography className="number">
                  alirazadev.herokuapp.com
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="contact-right">
          <Typography className="smallText">CONTACT US</Typography>
          <Typography className="inovative">
            Let Me Know Here Know Here
          </Typography>

          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
