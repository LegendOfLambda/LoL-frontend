import React, { useState } from "react";
import NavBar from "../../components/navigation";

import "../../pages/SignUp/sign-up.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user)

    history.push('/play-now')
  };

  return (
    <div className="signup-page">
      <NavBar />
      <h2>Create your account now</h2>
      <form onSubmit={handleSubmit} noValidate={true}>
        <label>
          Username
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            type="text"
            placeholder="username"
          />
        </label>
        <label>
          Password
          <input
            name="password1"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </label>
        <button type="submit">Login</button>
        <p>
          Don't have an account?
            <span id='switch-page-link' onClick={() => history.push('/register')}>
                Sign up.
            </span>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, null)(Login);
