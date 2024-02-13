import bannerImg from "../../assets/images/banner4.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10  bg-primary"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl bg-gray-300 bg-opacity-50 rounded-md p-12">
            <h1
              className="mb-5 text-5xl font-bold"
              style={{ fontFamily: '"Cardo", serif' }}
            >
              Museums
            </h1>
            <p className="mb-5 text-2xl font-sans ">
              Let Your Exhibits Talk To Your Visitors In Their Own Language!
            </p>
            <button className="btn btn-secondary mt-4 text-xl btn-outline ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
