import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout title="about">
      <p>A js developper</p>
      <img src="/static/photo-romaric.jpg" alt="romaric" width="250" />
      <style jsx>{`
        p {
          background-color: green;
        }
      `}</style>
    </Layout>
  );
};

export default about;
