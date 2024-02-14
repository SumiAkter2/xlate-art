import img from "../../../assets/images/art16.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";
import qrImg from "../../../assets/images/qr.jpg";
import cardImg from "../../../assets/images/card.jpg";
import { FaRegDotCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="lg:px-12 px-6 bg-primary my-12">
      <h2 className="mb-6 lg:text-5xl text-5xl font-bold text-center">
        Translate your exhibit description to over 100 spoken languages. Bring
        in more visitors.
      </h2>
      <div className="hero min-h-screen bg-primary text-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <img
            data-aos="fade-down"
            data-aos-duration="2500"
            src={img}
            className="lg:h-[500px] lg:w-[700px] w-[300px] md:w-[600px] mx-auto rounded-lg shadow-2xl my-12"
          />
          <div>
            <img className=" w-80 h-60 " src={cardImg} alt="card-img " />

            <div className="flex justify-center items-center my-2">
              <FaLongArrowAltDown size="30px" className="text-orange-500" />
            </div>
            <img src={qrImg} alt="qr-code-img" className="w-80 h-60" />
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
              specifications. The Automatic method is quick (almost instant) and
              least effort. The Handcrafted method is meticulous, and under your
              full control.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-xl">
          If you want, you can mix and match!
        </p>
        <h2 className="my-6 lg:text-5xl text-5xl font-bold ">
          “Mix and Match…”:
        </h2>
        <p className=" mt-4 text-xl">
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
