import  { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault(); //console.log(e);
    const response = await axios.post("login", //http://localhost:8000/api/
      { email, password });  //, { withCredentials: true }
    setRedirect(true); console.log(response);
  };

  if(redirect) {
    return <Navigate to="/" />;
  }

  return <main className="form-signin">
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input type="email" className="form-control" id="email" placeholder="name@example.com"
          onChange={e => setEmail(e.target.value)} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </main>;
};
