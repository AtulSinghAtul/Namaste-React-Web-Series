import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps!!</h1>
      <h1>Something Weny Wrong!</h1>
      <h2>{err?.data}</h2>
      <h2>
        Error: {err?.status} {err.statusText}
      </h2>

      <Link to={"/"}>
        <button style={{ cursor: "pointer" }}>Back to Home Page</button>
      </Link>
    </>
  );
};

export default Error;
