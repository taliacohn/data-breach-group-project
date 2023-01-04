import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { date, sendTotalPrice, getUser } from "../controller/addOrderFunctions";
import { newOrderComplete } from "../controller/addOrderData";

function AddOrder() {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState("");
  const [numOfProducts, setNumOfProducts] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const date = date();

  const sendTotalPrice = sendTotalPrice(numOfProducts);

  const user = getUser();
  const userId = user.id;

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
              onChange={
                ((e) => {
                  setNumOfProducts(e.target.value);
                },
                { sendTotalPrice })
              }
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
          <Button
            variant="primary"
            onClick={
              (handleClose,
              newOrderComplete(productName, userId, numOfProducts))
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddOrder;
