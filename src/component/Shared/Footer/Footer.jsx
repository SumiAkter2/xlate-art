import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-50 text-secondary font-semibold font-sans">
        <aside>
          <h1
            className="flex-1  text-3xl font-bold"
            style={{ fontFamily: '"Cardo", serif' }}
          >
            Exhibit!
          </h1>
          <p className="text-sm">Helping your museum talk to the world!</p>
          <p className="text-2xl">Questions?</p>
          <p className="">
            <a href="#">Support@Exhibit.Technology</a>
          </p>
        </aside>
        <div>
          <h1 className="footer-title">SUBSCRIBE</h1>
          <p className="text-sm">
            Subscribe to our newsletter and get exclusive updates directly in
            your inbox.
          </p>
          <div className="join join-vertical lg:join-horizontal mt-6">
            <input
              className="input input-secondary focus:outline-0  join-item"
              placeholder="Text here"
            />
            <button className="btn btn-secondary join-item">Submit</button>
          </div>
        </div>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebookF
                size="35px"
                className=" hover:bg-blue-400 hover:text-primary p-1 rounded-full cursor-pointer"
              />
            </a>
            <a>
              <IoLogoWhatsapp
                size="35px"
                className=" hover:bg-green-400 hover:text-primary  rounded-full cursor-pointer p-1"
              />
            </a>
            <a>
              <FaXTwitter
                size="35px"
                className=" hover:bg-black hover:text-primary p-1 rounded-full cursor-pointer"
              />
            </a>
          </div>
        </nav>
      </footer>

      <footer className="border-t-2  border-gray-300  footer items-center p-10 bg-gray-50 text-secondary font-semibold">
        <aside className="items-center grid-flow-col">
          <p>© 2019 - 2023 | All Rights Reserved - Blackheath Services, LLC</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>Privacy Policy |</a>
          <a> Terms of Use</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
