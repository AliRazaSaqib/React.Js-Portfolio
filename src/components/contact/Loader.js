/** @format */

import React from "react";
import { CircularProgress } from "@material-ui/core";
import "../../components/contact/contact.css";

function Loader() {
  return (
    <div className="loader">
      Please Wait
      <div>
        <CircularProgress className="circular" />
      </div>
    </div>
  );
}

export default Loader;
