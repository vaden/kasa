import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container-global">
      <main className="container">
        <Navigation />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
