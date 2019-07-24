import React from "react";
import { withRouter } from "next/router";

const post = ({ router }) => {
  return <div>{router.query.title}</div>;
};

export default withRouter(post);
