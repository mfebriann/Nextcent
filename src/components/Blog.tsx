import React from "react";

const Blog: React.FC<{ image: string; title: string }> = ({ image, title }) => {
  return (
    <div className="relative sm:w-[400px] xl:w-[365px]">
      <div>
        <img src={image} alt="blog" className="w-full object-cover" />
      </div>
      <div className="mx-auto w-full bg-white p-4 shadow-lg sm:absolute sm:-bottom-16 sm:left-1/2 sm:z-10 sm:max-w-[360px] sm:-translate-x-2/4 sm:rounded-lg xl:max-w-80">
        <p className="text-xl font-semibold text-grey sm:text-center">
          {title}
        </p>
        <a
          href="#"
          className="mt-6 flex items-center gap-4 text-center text-xl font-semibold text-primary sm:justify-center"
        >
          Readmore
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
  );
};

export default Blog;
