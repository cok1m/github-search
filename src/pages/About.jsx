import React from "react";
import { Jumbotron, Container } from "react-bootstrap"

export const About = (props) => {
  return (
      <Jumbotron>
        <Container>
        <h1>Информация</h1>
        <p>
          Версия приложения: <strong>1.0.0</strong>
        </p>
        </Container>
      </Jumbotron>
  );
};
