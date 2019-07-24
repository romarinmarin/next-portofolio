import Layout from "../components/Layout";

const Error = ({ statusText }) => {
  return (
    <Layout>{statusText ? `Erreur : ${statusText}` : "Erreur 404"} </Layout>
  );
};

export default Error;
