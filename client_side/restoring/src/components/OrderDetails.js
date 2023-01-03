import OrderInfo from "./OrderInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

function OrderDetails() {
  const [OrderComponents, setOrderComponents] = useState();
  const [productName, setProductName] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const getOrderInfo = () => {
    return axios.get(
      `http:localhost:3000/api/v1/users?id=${user.id}&orders=all`
    );
  };

  const getSearchInfo = () => {
    return axios.get(
      `http:localhost:3000/api/v1/users?id=${user.id}&name=${productName}`
    );
  };

  function loadOrderComponents(response) {
    if (response.data.orders) {
      setOrderComponents(
        response.data.orders.map((obj) => {
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

  const showComponents = () => {
    getOrderInfo().then((response) => {
      loadOrderComponents(response);
    });
  };

  const showSearchComponents = () => {
    getSearchInfo().then((response) => {
      loadOrderComponents(response);
    });
  };

  showComponents();

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
            onClick={showSearchComponents}
          >
            Search
          </Button>
        </Form>
      </div>

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
