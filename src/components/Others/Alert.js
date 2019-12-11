import React from "react";
import { MDBAlert } from "mdbreact";

export default function Alert({ isError, message }) {
  return (
    <MDBAlert className="alert" color={isError ? "danger" : "info"}>
      {message}
    </MDBAlert>
  );
}
