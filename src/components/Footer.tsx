import { LogoFooter } from "../assets/icons";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col gap-14 px-5 py-20 text-white md:grid md:grid-cols-[0.65fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src={LogoFooter} alt="logo" />
            <span className="text-4xl font-bold text-white">Nexcent</span>
          </div>
          <p className="mt-10 text-sm text-silver sm:text-base">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="mt-2 text-sm text-silver sm:text-base">
            All rights reserved
          </p>
          <div className="mt-10 flex items-center gap-4">
            <SocialMedia />
          </div>
        </div>
        <div className="flex flex-wrap gap-10 md:gap-20">
          <div>
            <h5 className="text-2xl font-medium">Company</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-2xl font-medium">Support</h5>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:opacity-70">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-2xl font-medium">Stay up to date</h5>
            <form
              method="POST"
              className="relative mt-6 flex w-full items-center"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-lg bg-[#515B60] py-2 pl-3 pr-10 text-silver outline-none"
              />
              <div className="absolute right-3 cursor-pointer">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                    fill="white"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
