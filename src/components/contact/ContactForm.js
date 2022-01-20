/** @format */

import { Grid, Button } from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import emailjs from "@emailjs/browser";
import "../../components/contact/contact.css";
import "../../components/sections/sections.css";
import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Loader from "./Loader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ContactForm() {
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  // for dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").required("Required"),
    email: Yup.string().required("Required"),
    subject: Yup.string().min(2, "Too Short!").required("Required"),
    message: Yup.string().min(10, "Too Short!").required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      //   for sending email
      setSpin(true);
      emailjs
        .send(
          "service_eew56bp",
          "template_xn228z3",
          values,
          "user_pQOgpMMnEeFUc5LVE5woN"
        )
        .then(
          (result) => {
            // console.log(result.text);
            // for spinner
            setTimeout(() => {
              setSpin(false);
              handleClickOpen();
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Formik
        validationSchema={contactFormSchema}
        initialValues={initialValues}
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
                  component={TextField}
                  className="textArea"
                />
              </Grid>
            </Grid>
            <Button
              className="contact-btn"
              variant="contained"
              type="submit"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Submit
            </Button>
          </Form>
        )}
      />
      <Button onClick={handleClickOpen}>Show</Button>
      {/* show alert */}
      {spin ? (
        <Loader />
      ) : (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              className="slide-description"
            >
              Your Informtaion was successfully submitted, we will contact with
              you shortly. Thank you for reaching out.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="popUpBtn">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default ContactForm;
