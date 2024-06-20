import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Jumbotron1, Jumbotron2, Jumbotron3 } from "../assets/illustrations";
import Button from "./Button";

const Jumbotron = () => {
  return (
    <section className="bg-silver pb-5 pt-10 lg:pt-20">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh] sm:h-[80vh] md:h-[105vh] lg:h-[480px]"
      >
        <SwiperSlide>
          <div className="container flex flex-col-reverse px-5 md:px-0 lg:flex-row lg:justify-between">
            <div>
              <h2 className="mt-10 text-4xl font-bold leading-tight text-dark-grey sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-tight xl:max-w-[720px]">
                Lessons and insights{" "}
                <span className="text-primary">from 8 years</span>
              </h2>
              <p className="mt-4 text-sm text-grey sm:text-base lg:max-w-[560px]">
                Where to Grow Your Business as a Photographer: Maximizing the
                Potential of Both Your Website and Social Media Platforms
              </p>
              <Button text="Register" />
            </div>
            <img
              src={Jumbotron1}
              className="mx-auto h-56 md:h-auto lg:mx-0"
              alt="jumbotron"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col-reverse px-5 md:px-0 lg:flex-row lg:justify-between">
            <div>
              <h2 className="mt-10 text-4xl font-bold leading-tight text-dark-grey sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-tight xl:max-w-[720px]">
                Transform Your{" "}
                <span className="text-primary">Photography Business</span>
              </h2>
              <p className="mt-4 text-sm text-grey sm:text-base lg:max-w-[560px]">
                Learn the proven strategies and tools to enhance your online
                presence and attract more clients.
              </p>
              <Button text="Try It" />
            </div>
            <img
              src={Jumbotron2}
              className="mx-auto h-56 md:h-auto lg:mx-0"
              alt="jumbotron"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col-reverse px-5 md:px-0 lg:flex-row lg:justify-between">
            <div>
              <h2 className="mt-10 text-4xl font-bold leading-tight text-dark-grey sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-tight xl:max-w-[720px]">
                Master Website and{" "}
                <span className="text-primary">Social Media</span>
              </h2>
              <p className="mt-4 max-w-[560px] text-sm text-grey sm:text-base lg:max-w-[560px]">
                {" "}
                Discover how to leverage both platforms to maximize your reach
                and profitability.
              </p>
              <Button text="Get Started" />
            </div>
            <img
              src={Jumbotron3}
              className="mx-auto h-56 md:h-auto lg:mx-0"
              alt="jumbotron"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Jumbotron;
