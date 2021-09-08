import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const { register, handleSubmit } = useForm();

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
        </div>
      </div>
    </section>
  );
}

export default withRouter(LoginPage);
