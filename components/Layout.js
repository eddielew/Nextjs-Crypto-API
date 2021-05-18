import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <>
      <div className="layout">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="header">
          <Link href="/">
            <a>Cryto Currency Tracker!</a>
          </Link>
        </header>
        <main>{children}</main>
      </div>
      <div className="footer">
        <footer>Copyright 2021 Eddie Lew</footer>
      </div>
    </>
  );
};

export default Layout;
