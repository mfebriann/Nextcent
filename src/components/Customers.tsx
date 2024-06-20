import { Content3 } from "../assets/illustrations";
import {
  LogoClientActive,
  LogoClient2,
  LogoClient3,
  LogoClient4,
  LogoClient5,
  LogoClient6,
} from "../assets/icons";

const Customers = () => {
  return (
    <section className="mt-10 bg-silver py-10 md:mt-20 md:py-20">
      <div className="container flex flex-col px-5 lg:flex-row lg:gap-6">
        <img src={Content3} alt="customer" />
        <div>
          <p className="mt-4 text-sm text-grey sm:text-base">
            Using this service has been a transformative experience for my
            business. From the moment we implemented the platform, we noticed a
            significant improvement in our operational efficiency and client
            satisfaction. The user-friendly interface allows our team to easily
            navigate and utilize all the innovative features, which have
            streamlined our processes and reduced our manual workload.
            Exceptional customer support has been a standout, always ready to
            assist with any queries. This service has saved us valuable time,
            enhanced our productivity, and boosted our profitability. I highly
            recommend it to anyone looking to elevate their business operations
            and achieve outstanding results.
          </p>
          <p className="mt-5 text-xl font-medium text-primary">Tim Smith</p>
          <p className="mt-2 text-sm text-light-grey sm:text-base">
            British Dragon Boat Racing Association
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <img src={LogoClientActive} alt="logo-client" />
            <img src={LogoClient2} alt="logo-client" />
            <img src={LogoClient3} alt="logo-client" />
            <img src={LogoClient4} alt="logo-client" />
            <img src={LogoClient5} alt="logo-client" />
            <img src={LogoClient6} alt="logo-client" />
            <a
              href="#"
              className="flex items-center gap-4 text-xl font-medium text-primary"
            >
              Meet all customers
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                  stroke="#4CAF4F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
