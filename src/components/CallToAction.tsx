import { Helping1, Helping2, Helping3, Helping4 } from "../assets/icons";

const CallToAction = () => {
  return (
    <section className="mt-12 bg-silver py-10 md:mt-20 md:py-20">
      <div className="container flex flex-col justify-between px-5 lg:flex-row">
        <div>
          <h3 className="text-2xl font-semibold !leading-normal text-dark-grey sm:text-3xl md:text-4xl">
            Helping a local <br />
            <span className="text-primary">business reinvent itself</span>
          </h3>
          <p className="mt-2 text-sm font-medium text-grey-900 sm:text-base">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="mt-14 grid items-start gap-10 sm:grid-cols-2 lg:mt-0">
          <div className="flex items-center gap-5">
            <img src={Helping1} alt="helping" />
            <div>
              <h5 className="text-2xl font-bold text-dark-grey">2,245,341</h5>
              <p className="text-sm text-grey">Members</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={Helping3} alt="helping" />
            <div>
              <h5 className="text-2xl font-bold text-dark-grey">46,328</h5>
              <p className="text-sm text-grey">Clubs</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={Helping2} alt="helping" />
            <div>
              <h5 className="text-2xl font-bold text-dark-grey">828,867</h5>
              <p className="text-sm text-grey">Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={Helping4} alt="helping" />
            <div>
              <h5 className="text-2xl font-bold text-dark-grey">1,926,436</h5>
              <p className="text-sm text-grey">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
