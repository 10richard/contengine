import MainButton from "./MainButton";

const Hero = () => {
  return (
    <section className="hero flex flex-col justify-between items-center gap-10 py-20">
      <div className="hero-text grid gap-3 text-white text-center">
        <h1 className="font-semibold text-7xl leading-tight max-[950px]:text-5xl max-[950px]:leading-tight max-[635px]:text-4xl max-[635px]:leading-tight px-5">
          How to Increase Revenue to <br className="max-[490px]:hidden" />
          $800k+/Mo in 12 Months
        </h1>
        <p className="text-xl">...With a 6x MER</p>
      </div>

      <MainButton bgColor="bg-white" />
    </section>
  );
};

export default Hero;
