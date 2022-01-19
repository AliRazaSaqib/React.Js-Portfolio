/** @format */

import { Typography, Grid, Button, TextareaAutosize } from "@material-ui/core";
import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import "../../components/contact/contact.css";
import "../../components/sections/sections.css";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from "@material-ui/icons/Language";

function Contact() {
  const initialValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required!"),
    email: Yup.string().required("Email required!"),
    subject: Yup.string().required("Subject required!"),
    message: Yup.string().required("Message Required!"),
  });

  const onSubmit = async (values, { setSubmitting }) => {};
  return (
    <div className="projects">
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

          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              render={({ submitForm, isSubmitting, values }) => (
                <Form noValidate className="form">
                  <Grid
                    container
                    item
                    sm={12}
                    xs={12}
                    md={12}
                    lg={12}
                    xlg={12}
                    spacing={2}
                  >
                    <Grid item sm={12} xs={12} md={6} lg={6} xlg={6}>
                      <Field
                        type="text"
                        label="Your good name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} xlg={6}>
                      <Field
                        type="email"
                        label="Email address"
                        name="email"
                        variant="outlined"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>

                    <Grid item sm={12} xs={12} md={12} lg={12} xlg={12}>
                      <Field
                        type="text"
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item sm={12} xs={12} md={12} lg={12} xlg={12}>
                      <Field
                        type="text"
                        label="Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        component={TextareaAutosize}
                        className="textArea"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    className="contact-btn"
                    variant="contained"
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                    style={{ marginTop: "16px" }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
