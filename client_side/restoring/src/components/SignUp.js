import { useState } from "react";
import axios from "axios";
import SERVER_URL from "../globals";
import { redirect } from "react-router-dom";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [loading, setLoading] = useState(true);

  function handleInputChange(event) {
    const { name, value, classList } = event.target;
    if (classList.contains("border-danger")) {
      classList.remove("border-danger");
    };
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "retypePassword":
        setRetypePassword(value);
        break;
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      username,
      email,
      password,
      retypePassword
    }
    axios.post(SERVER_URL + "/api/users", user).catch(
      (err) => {
        if (err) {
          alert(err.response.data);
        }
      }
    ).then((response) => {
      localStorage.setItem("user", response.data);
      redirect("/order-details");
    }
    );
  };
  function handleBlur(e) {
    const { name, value, classList } = e.target;
    switch (name) {
      case "username":
        axios.get(SERVER_URL + `/api/v1/users?name=${value}`).catch((err) => {
          if (err) {
            classList.add("border-danger");
          }
        });
        break;
      case "email":
        axios.get(SERVER_URL + `/api/v1/users?email=${value}`).catch((err) => {
          if (err) {
            classList.add("border-danger");
          }
        });
        break;
    }
  }
  //style = {{ width: "12vw", height: "25vh", position: "absolute", top: "20%", left: "50%", backgroundColor: "rgb(255,255,255,0.3)" }}
  return (
    <>
      <div className="container mt-5">

        <h1>Sign Up</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" onChange={handleInputChange}
              id="username" name="username" onBlur={handleBlur} aria-describedby="emailHelp" />
            <div id="usernameHelp" className="form-text">Username must be unique and comprised of 7 characters.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email"
              aria-describedby="emailHelp" onChange={handleInputChange} onBlur={handleBlur} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" onChange={handleInputChange} id="password" />
            <div id="passwordHelp" className="form-text">Password must be more than 4 charactes, can contain
              lowercase/uppercase, numbers and one of !,-,@</div>
          </div>
          <div className="mb-3">
            <label htmlFor="retypePassword" className="form-label">Retype password</label>
            <input type="password" name="retypePassword" className="form-control" onChange={handleInputChange} id="retypePassword" />
            <div id="passwordHelp" className="form-text">Password and retype password must match</div>
          </div>
          <button type="submit" onClick={handleSubmit} style={{ minWidth: "10%" }} className="btn btn-primary ">
            <p className="mb-0" hidden={!loading}>Submit</p>
            <div hidden={loading}
              className="spinner-border text-white " role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
          </button>
        </form>
      </div>

    </>
  );
}
export default SignUp;