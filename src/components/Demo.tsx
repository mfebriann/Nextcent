import Button from "./Button";

const Demo = () => {
  return (
    <section className="mt-20 bg-silver py-10 sm:mt-40 md:py-20">
      <div className="container px-5">
        <h2 className="mx-auto max-w-[700px] text-center text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-5xl">
          Let's try to our agency and get the best experience
        </h2>
        <div className="flex justify-center">
          <Button text="Get a Demo" isHaveArrow />
        </div>
      </div>
    </section>
  );
};

export default Demo;
