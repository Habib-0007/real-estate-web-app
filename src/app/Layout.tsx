import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
