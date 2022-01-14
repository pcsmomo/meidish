import React from "react";

const Signin = () => {
  return (
    <div className="row" style={{ marginTop: 24 }}>
      <form className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field col s12">
            <input name="username" type="text" />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12">
            <input name="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn col s12">
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
