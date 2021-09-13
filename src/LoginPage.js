import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const { register, handleSubmit } = useForm();
  const [openDialog, setOpenDialog] = useState(false);

  const onSubmit = (values) => {
    const apiMockData = {
      phonenumber: "+260000000",
      email: values.email,
    };

    props.history.push({
      pathname: "/home",
      apiMockData,
    });
  };

  const FogotPasswordDialog = () => {
    throw new Error("Failed to open Dialog");
  };

  return (
    <section className="hero has-background-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Demo React Application</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                  {...register("email")}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required
                  {...register("password")}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-info is-fullwidth">Login</button>
              </p>
            </div>
          </form>
          <br />
          <div className="field">
            <p className="control">
              <button
                className="button is-link is-outlined"
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                Forgot Password?
              </button>
            </p>
          </div>
          {openDialog === true ? <FogotPasswordDialog /> : <div></div>}
        </div>
      </div>
    </section>
  );
}

export default withRouter(LoginPage);
