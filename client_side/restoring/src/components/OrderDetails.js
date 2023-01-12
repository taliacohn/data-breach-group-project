import OrderInfo from "./OrderInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import AddOrder from "./AddOrder";
import {
  showSearchComponents,
  showComponents,
} from "../controller/orderDetailsData";

function OrderDetails() {
  const [OrderComponents, setOrderComponents] = useState();
  const [productName, setProductName] = useState("");

  const orderInfo = showComponents();
  const searchInfo = showSearchComponents(productName);

  function setComponents(orderResponse) {
    if (orderResponse) {
      setOrderComponents(
        orderResponse.data.result.map((obj) => {
          return (
            <OrderInfo
              id={obj.id}
              date={obj.date}
              items={obj.items}
              price={obj.price}
            />
          );
        })
      );
    } else {
      setOrderComponents(`<h3>No previous orders</h3>`);
    }
  }

  useEffect(() => {
    setComponents(orderInfo);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h1 className="mb-3 mx-4">Order Information</h1>
        <Form className="d-flex " style={{ height: "3rem" }}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <Button
            variant="outline-secondary"
            className="me-3"
            onClick={setComponents(searchInfo)}
          >
            Search
          </Button>
        </Form>
      </div>

      <div>{AddOrder}</div>

      <div className="d-flex flex-wrap justify-content-center p-4">
        {OrderComponents}
      </div>

      <div className="d-flex justify-content-end me-5 mt-3">
        <Button variant="outline-secondary">Add New Order</Button>
      </div>

      <div className="justify-content-end mx-5 mb-5 px-5">
        <h6 className="mb-3">Total Price: </h6>
        <h6>Total Number Items Ordered: </h6>
      </div>
    </>
  );
}
export default OrderDetails;
