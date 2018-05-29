import React from "react";
import { Container, Row, Col1 } from "../Grid";

export const ListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col1>
          <h3>{props.title}</h3>
          <p><strong>Date: {props.date}</strong></p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
          <strong>ARTICLE LINK</strong>
          </a>
        </Col1>
        <Col1>
          {props.children}
        </Col1>
      </Row>
    </Container>
  </li>
);
