import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default class ProductItem extends Component {
  handleDetailProduct = (e) => {
    const { product, getDetailProductShoe } = this.props;
    getDetailProductShoe(product);
  };

  render() {
    const { product } = this.props;
    return (
      <Card key={product.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={this.handleDetailProduct}>
            Thông tin sản phẩm
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
