import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <main className="container">
        <Navigation />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
