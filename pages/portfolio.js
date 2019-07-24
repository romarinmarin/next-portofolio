import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Error from "./_error";

class portfolio extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/romarinmari");
    const statusText = await res.statusText;
    const user = await res.json();
    return { user, statusText };
  }
  render() {
    const { user, statusText } = this.props;
    if (!(statusText == "OK")) {
      return <Error statusText={statusText} />;
    }
    return (
      <Layout>
        {JSON.stringify(user)}
        <img src="" alt="" />
      </Layout>
    );
  }
}

export default portfolio;
