import img from "../../../assets/images/art16.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";
import qrImg from "../../../assets/images/qr.jpg";
import cardImg from "../../../assets/images/card.jpg";
import { FaRegDotCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="lg:px-12 px-6 bg-primary mt-4">
      <h2 className="mb-6 lg:text-5xl text-5xl font-bold text-center">
        Translate your exhibit description into over 100 spoken languages and
        bring in more visitors.
      </h2>
      <div className="hero h-full bg-primary text-secondary my-0 py-0">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <img
            data-aos="fade-down"
            data-aos-duration="2500"
            src={img}
            className="lg:h-[500px] lg:w-[700px] w-[300px] md:w-[600px] mx-auto rounded-lg shadow-2xl "
          />
          <div>
            <img
              data-aos="flip-left"
              data-aos-duration="2000"
              className=" w-80 h-60 "
              src={cardImg}
              alt="card-img "
            />

            <div className="mt-8">
              <span className="text-sm font-bold">Scan here:</span>
              <img
                data-aos="flip-right"
                data-aos-duration="2500"
                src={qrImg}
                alt="qr-code-img"
                className="w-[380px] h-60 lg:-ml-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="mb-6 lg:text-5xl text-5xl font-bold ">
          It's <span> so easy...</span>
        </h2>
        <div className="text-xl font-sans">
          <p>1.Pick an exhibit in your museum;</p>
          <p>2.Type your desired description;</p>
          <p>3.Translate it to another language</p>
        </div>
        <div className="py-6 font-sans ">
          <div>
            <h2 className="text-2xl font-semibold flex items-center">
              <FaRegDotCircle size="22px" className="mr-2" />
              Automatically
            </h2>
            <p className=" mt-4 text-xl">
              Computer translation translates your text. Choose from over 100
              spoken languages.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 flex items-center">
              <FaRegDotCircle size="22px" className="mr-2" />
              Handcrafted
            </h2>
            <p className=" my-4 text-xl">
              You write the translation, prepared exactly to your
              specifications.
            </p>
            <br />
            <p className="  text-xl">
              The Automatic method is quick (almost instant) and least effort.
              The Handcrafted method is meticulous, and under your full control.
            </p>
            <p className="  text-xl">If you want, you can mix and match!</p>
          </div>
        </div>

        <p className="mt-4 text-xl">
          Exhibit! software lets you easily print out a QR code for each
          exhibit. All your descriptions are safely stored on the cloud. Edit
          and update them any time without needing to change the QR code affixed
          next to the exhibit.
        </p>
      </div>
    </div>
  );
};

export default Feature;
