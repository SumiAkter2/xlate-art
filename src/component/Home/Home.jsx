import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import Feature from "./Feature/Feature";
import FreeTrial from "./FreeTrial/FreeTrial";
import Gallery from "./Gallery/Gallery";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Banner />
      <Gallery />
      <Feature />
      <FreeTrial />
    </div>
  );
};

export default Home;
