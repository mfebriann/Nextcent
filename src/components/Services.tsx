import { Content2 } from "../assets/illustrations";
import Button from "./Button";

const Services = () => {
  return (
    <section className="container mt-10 flex flex-col items-center px-5 md:mt-20 lg:flex-row lg:gap-6">
      <img src={Content2} alt="pixelgrade" />
      <div className="mt-10 lg:mt-0">
        <h3 className="text-2xl font-semibold !leading-normal text-dark-grey sm:text-3xl md:text-4xl">
          How to design your site footer like we did
        </h3>
        <p className="mt-4 text-sm text-grey sm:text-base">
          Learn the step-by-step process of designing an effective and visually
          appealing site footer just like ours. Discover key design principles,
          essential elements to include, and practical tips for creating a
          footer that enhances user experience, reinforces your brand, and
          provides useful information. Whether you are starting from scratch or
          looking to improve your current footer, our comprehensive guide will
          help you achieve a professional and functional design.
        </p>
        <Button text="Learn More" />
      </div>
    </section>
  );
};

export default Services;
