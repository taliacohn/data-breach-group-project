import { useState } from "react";
import axios from "axios";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
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
    // axios.post("/api/users", user).then((response) => console.log(response));
  };
  return (
    <>
      <div className="container mt-5">
        <h1>Sign Up</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" onChange={handleInputChange}
              id="username" name="username" aria-describedby="emailHelp" />
            <div id="usernameHelp" className="form-text">Username must be unique and comprised of 7 characters.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email"
              aria-describedby="emailHelp" onChange={handleInputChange} />
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
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  );
}
export default SignUp;