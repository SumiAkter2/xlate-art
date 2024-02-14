import bannerImg from "../../assets/images/banner4.jpg";
const Banner = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10  bg-primary"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="max-w-2xl bg-gray-300 bg-opacity-50 rounded-md py-12 px-6"
        >
          <h1
            className="mb-5 text-5xl lg:text-[84px] font-bold "
            style={{ fontFamily: '"Cardo", serif' }}
          >
            Museums
          </h1>
          <p className="mb-5 lg:text-5xl text-4xl font-sans leading-10 font-bold">
            Let Your Exhibits Talk To Your Visitors In Their Own Language!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
