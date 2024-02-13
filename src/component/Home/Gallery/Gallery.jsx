import "./Gallery.css";
import img1 from "../../../assets/images/art-1.jpg";
import img2 from "../../../assets/images/art2.jpg";
import img3 from "../../../assets/images/art3.jpg";
import img4 from "../../../assets/images/art4.jpg";
import img5 from "../../../assets/images/art5.jpg";
import img6 from "../../../assets/images/art6.jpg";
import img7 from "../../../assets/images/art7.jpg";
import img8 from "../../../assets/images/art8.jpg";
import img9 from "../../../assets/images/art9.jpg";
import img10 from "../../../assets/images/art10.jpg";
import img11 from "../../../assets/images/art11.jpg";
import img12 from "../../../assets/images/art12.jpg";
import img13 from "../../../assets/images/art13.jpg";
import img14 from "../../../assets/images/art14.jpg";
// import img15 from "../../../assets/images/art16.jpg";
// import img16 from "../../../assets/images/art17.jpg";
// import img17 from "../../../assets/images/art20.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="containers  text-secondary">
        <h2 className="heading-text uppercase text-center lg:text-5xl text-5xl font-bold mb-12">
          OUR <span> GALLERY</span>
        </h2>

        <div class="row ">
          <div class="column">
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img1}
                style={{ width: "100%" }}
                className="myImg "
                alt="gym-img"
              />
            </div>

            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img2}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img3}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
          </div>
          <div class="column">
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img5}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img6}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>

            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img7}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
          </div>

          <div class="column">
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img8}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img9}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img10}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img11}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
          </div>

          <div class="column">
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img4}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img12}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img13}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
            <div
              data-aos="fade-down
              "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={img14}
                style={{ width: "100%" }}
                className="myImg"
                alt="gym-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
