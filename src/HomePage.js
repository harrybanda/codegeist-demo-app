import { withRouter } from "react-router-dom";

function HomePage(props) {
  const { username } = (props.location && props.location.apiMockData) || {};
  return (
    <section className="hero has-background-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Demo Home Page</h1>
          <h2 className="subtitle">Welcome, {username.toUpperCase()}</h2>
        </div>
      </div>
    </section>
  );
}

export default withRouter(HomePage);
