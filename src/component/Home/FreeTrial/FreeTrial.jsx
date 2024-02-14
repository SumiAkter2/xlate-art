import bannerImg from "../../../assets/images/banner2.jpg";
const FreeTrial = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="hero h-full mt-6"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50  bg-secondary "></div>
      <div className="hero-content text-center text-primary">
        <div className="lg:max-w-2xl py-12">
          <h1
            className="mb-5 text-5xl font-bold"
            style={{ fontFamily: '"Cardo", serif' }}
          >
            Free 30-day trial for museums
          </h1>
          <p className="mb-5 text-2xl font-sans ">
            Use Exhibit! to highlight your exhibits!
          </p>
          <button className="btn btn-primary mt-4 text-xl  ">
            <a href="https://xlate.art/sendmuseumemailwithjsform.html">
              Sign Up Now!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
