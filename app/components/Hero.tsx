import MainButton from "./MainButton";

const Hero = () => {
  return (
    <section className="hero flex flex-col justify-between items-center gap-10 py-20">
      <div className="hero-text grid gap-3 text-white text-center">
        <h1 className="font-semibold text-7xl leading-tight max-[950px]:text-5xl max-[950px]:leading-tight max-[635px]:text-4xl max-[635px]:leading-tight px-5">
          How To Increase Revenue <br className="max-[490px]:hidden" />
          by $20k+/Mo In 3 Months
        </h1>
        <p className="text-xl">
          ...With 90%+ Profit Margin and Absolutely NO RISK
        </p>
      </div>

      <MainButton bgColor="bg-white" />
    </section>
  );
};

export default Hero;
