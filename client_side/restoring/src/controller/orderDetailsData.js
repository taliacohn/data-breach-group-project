import axios from "axios";
import { getUser } from "./addOrderFunctions";

const user = getUser();

const getOrderInfo = () => {
  return axios.get(`http:localhost:3000/api/v1/users?id=${user.id}&orders=all`);
};

const getSearchInfo = (productName) => {
  return axios.get(
    `http:localhost:3000/api/v1/users?id=${user.id}&name=${productName}`
  );
};

const showComponents = () => {
  getOrderInfo().then((response) => {
    if ((response.data.status = "success")) {
      return response;
    }
  });
};

const showSearchComponents = (productName) => {
  getSearchInfo(productName).then((response) => {
    if ((response.data.status = "success")) {
      return response;
    }
  });
};

export { showComponents, showSearchComponents };
