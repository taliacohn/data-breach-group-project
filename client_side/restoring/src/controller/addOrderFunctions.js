const date = () => {
  let date = new Date().toISOString.slice(0, 10);

  return date;
};

const sendTotalPrice = (numOfProducts) => {
  return numOfProducts * 2.87;
};

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export { date, sendTotalPrice, getUser };
