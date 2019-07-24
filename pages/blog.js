import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

class blog extends Component {
  render() {
    return (
      <Layout>
        <ul>
          <li>
            <Link href="/post?title=react">
              <a>react</a>
            </Link>
          </li>
          <li>
            <Link href="/post?title=angular">
              <a>Angular</a>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default blog;
