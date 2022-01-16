import { useState, useEffect, FormEvent, FormEventHandler } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import M from "materialize-css";

const Signin = () => {
  const { fetchUser } = useActions();

  const { loading, user } = useTypedSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUser(2);
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    M.updateTextFields();
  }, [username]);

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="row" style={{ marginTop: 24 }}>
      <form onSubmit={handleSubmit} className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field col s12">
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12">
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
