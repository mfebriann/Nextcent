import { Blog1, Blog2, Blog3 } from "../assets/images";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <section className="container mt-10 px-5 md:mt-20">
      <h3 className="text-center text-2xl font-semibold !leading-normal text-dark-grey sm:text-3xl md:text-4xl">
        Caring is the new marketing
      </h3>
      <p className="mt-2 text-center text-sm text-grey sm:text-base">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-10 sm:gap-x-8 sm:gap-y-28">
        <Blog
          title="Creating Streamlined Safeguarding Processes with OneRen"
          image={Blog1}
        />
        <Blog
          title="What are your safeguarding responsibilities and how can you manage them?"
          image={Blog2}
        />
        <Blog
          title="Revamping the Membership Model with Triathlon Australia  "
          image={Blog3}
        />
      </div>
    </section>
  );
};

export default Blogs;
