import axios from "axios";

const getOrderInfo = () => {
  return axios.get(`http:localhost:3000/api/v1/users?id=${user.id}&orders=all`);
};

const getSearchInfo = () => {
  return axios.get(
    `http:localhost:3000/api/v1/users?id=${user.id}&name=${productName}`
  );
};

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

export { showComponents, showSearchComponents };
