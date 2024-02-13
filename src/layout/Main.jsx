import { Outlet } from "react-router-dom";
import Header from "../component/Shared/Header/Header";
import Footer from "../component/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
