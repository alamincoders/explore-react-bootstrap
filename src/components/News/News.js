import React from "react";
import { Card, Col } from "react-bootstrap";

const News = (props) => {
  const { title, description, urlToImage } = props.data;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description.slice(0, 150)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
