import axios from "axios";

function getData(url, handleError, handleThen) {
  axios
    .get(SERVER_URL + url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((err) => {
      if (err) {
        handleError(err);
      }
    })
    .then((response) => {
      handleThen(response);
    });
}

function putData(url, data, handleError, handleThen) {
  axios
    .put(SERVER_URL + url, data)
    .catch((err) => {
      if (err) {
        handleError(err);
      }
    })
    .then((response) => {
      handleThen(response);
    });
}

export { getData, putData };
