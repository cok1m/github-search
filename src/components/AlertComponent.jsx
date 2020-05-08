import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { AlertContext } from "../context/alert/AlertContext";

export const AlertComponent = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null
  
  return (
    <Alert variant={alert.type || "secondary"} dismissible onClose={hide}>
      <Alert.Heading>{alert.text}</Alert.Heading>
    </Alert>
  );
};
