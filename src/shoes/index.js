import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import data from "./data.json";
import ProducList from "./shoes-store";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShoes: data,
      openModal: false,
      productShoesDetail: data[0],
    };
  }
  //   getData from ProductItem

  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  handleDetail = (product) => {
    this.setState({ productShoesDetail: product, openModal: true });
  };
  render() {
    return (
      <>
        <ProducList
          ProductData={this.state.listShoes}
          getDetail={this.handleDetail}
        ></ProducList>
        {/* <button onClick={this.onClickButton}>Click Me</button> */}
        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <h2>Thông Tin Sản Phẩm</h2>
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.productShoesDetail.image}
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <table className="table">
                <tbody>
                  <tr>
                    <td>id</td>
                    <td>{this.state.productShoesDetail.id}</td>
                  </tr>
                  <tr>
                    <td>Tên </td>
                    <td>{this.state.productShoesDetail.name}</td>
                  </tr>

                  <tr>
                    <td>Số lượng</td>
                    <td>{this.state.productShoesDetail.quantity}</td>
                  </tr>
                  <tr>
                    <td>Giá</td>
                    <td>{this.state.productShoesDetail.price} $</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{this.state.productShoesDetail.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
