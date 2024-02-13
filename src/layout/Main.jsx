import { Outlet } from "react-router-dom";
import Home from "../component/Home/Home";
import Footer from "../component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
