import { LogoSystem1, LogoSystem2, LogoSystem3 } from "../assets/icons";

const Community = () => {
  return (
    <section className="container mt-10 px-5 md:mt-20">
      <h3 className="mx-auto max-w-[550px] text-center text-2xl font-semibold !leading-normal text-dark-grey sm:text-3xl md:text-4xl">
        Manage your entire community in a single system
      </h3>
      <p className="mt-2 text-center text-sm text-grey sm:text-base">
        Who is Nextcent suitable for?
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-10 lg:grid lg:grid-cols-3 lg:justify-items-center">
        <div className="sm:max-w-72">
          <img src={LogoSystem1} alt="logo-community" className="mx-auto" />
          <h4 className="mt-4 text-center text-2xl font-bold text-dark-grey">
            Membership <br /> Organisations
          </h4>
          <p className="mt-2 text-center text-sm text-grey sm:text-base">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
        <div className="sm:max-w-72">
          <img src={LogoSystem2} alt="logo-community" className="mx-auto" />
          <h4 className="mt-4 text-center text-2xl font-bold text-dark-grey">
            National <br /> Associations
          </h4>
          <p className="mt-2 text-center text-sm text-grey sm:text-base">
            Our software automates member onboarding, engagement tracking, and
            reporting for national associations.
          </p>
        </div>
        <div className="sm:max-w-72">
          <img src={LogoSystem3} alt="logo-community" className="mx-auto" />
          <h4 className="mt-4 text-center text-2xl font-bold text-dark-grey">
            Clubs And <br /> Groups
          </h4>
          <p className="mt-2 text-center text-sm text-grey sm:text-base">
            Our software simplifies membership renewals, event management, and
            communications for clubs and groups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
