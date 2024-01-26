import React, { Component } from "react";
import ProductItem from "./productitem";
export default class ProducList extends Component {
  renderListProduct = () => {
    const { ProductData } = this.props;
    return ProductData.map((product) => {
      return (
        <ProductItem
          key={product.id}
          product={product}
          getDetailProductShoe={this.props.getDetail}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Shop shoes</h1>
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
  