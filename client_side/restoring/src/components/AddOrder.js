import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import SERVER_URL from "../globals";
import { useNavigate } from "react-router-dom";

function AddOrder() {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState("");
  const [numOfProducts, setNumOfProducts] = useState();
  const [totalPrice, setTotalPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate;

  const date = () => {
    let date = new Date().toISOString.slice(0, 10);

    return date;
  };

  const sendTotalPrice = () => {
    return numOfProducts * 2.87;
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const sendNewOrder = () => {
    return axios.post(SERVER_URL + `/api/v1/orders`, {
      user_id: user.id,
      product_name: productName,
      quantity: numOfProducts,
    });
  };

  const newOrderComplete = () => {
    sendNewOrder.then((response) => {
      if (response.data.status) {
        navigate("/order-details");
      }
    });
  };

  return (
    <>
      <Button
        variant="outline-secondary"
        style={{ height: "3rem" }}
        onClick={handleShow}
      >
        Add New Order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Date: {date}</Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="productName"
              placeholder="Bananas"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Number of Product</Form.Label>
            <Form.Select
              aria-label="Default select number"
              onChange={(e) => {
                setNumOfProducts(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Price: ${sendTotalPrice}</Form.Label>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, newOrderComplete)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddOrder;
