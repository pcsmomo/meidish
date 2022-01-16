import { FormEvent, FormEventHandler, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import M from "materialize-css";

const Signin = () => {
  const { fetchUser } = useActions();

  const { loading, user } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchUser(2);
  }, []);

  useEffect(() => {
    M.updateTextFields();
  }, [user]);

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="row" style={{ marginTop: 24 }}>
      <form onSubmit={handleSubmit} className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field col s12">
            <input name="username" type="text" value={user?.username} />
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
