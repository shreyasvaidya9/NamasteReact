import { useRouteError } from "react-router-dom";

import Layout from "./src/components/Layout/Layout";

const ErrorElement = () => {
  const { status, statusText } = useRouteError();

  return (
    <Layout>
      <h1>
        {status} : {statusText}
      </h1>
    </Layout>
  );
};

export default ErrorElement;
