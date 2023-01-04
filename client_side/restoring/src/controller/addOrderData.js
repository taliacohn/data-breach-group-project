import { useNavigate } from "react-router-dom";
import SERVER_URL from "../globals";
import axios from "axios";

const sendNewOrder = (productName, userId, numOfProducts) => {
  return axios.post(SERVER_URL + `/api/v1/orders`, {
    user_id: userId,
    product_name: productName,
    quantity: numOfProducts,
  });
};

const navigate = useNavigate;

const newOrderComplete = (productName, userId, numOfProducts) => {
  sendNewOrder(productName, userId, numOfProducts).then((response) => {
    if (response.data.status) {
      navigate("/order-details");
    }
  });
};

export { newOrderComplete };
