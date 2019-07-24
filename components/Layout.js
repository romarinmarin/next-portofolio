import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <header>
        <Head>
          <title>Romaric portfolio</title>
        </Head>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <footer>Copyright {new Date().getFullYear()}</footer>
      <style global jsx>{`
        footer {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Layout;
