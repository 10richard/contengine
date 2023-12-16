import guartanteeIcon from "@/public/images/guarantee.png";

const Guarantee = () => {
  return (
    <div className="guarantee-container flex max-[1035px]:flex-col items-center gap-10 px-16 max-[565px]:px-5 py-10 absolute top-0 translate-y-[-50%] w-5/6 min-w-[300px] max-w-[1000px] rounded-2xl">
      <div className="grid gap-5 text-white">
        <h2 className="text-5xl max-[500px]:text-4xl font-medium">
          Our Guarantee
        </h2>
        <p className="min-[500px]:text-lg max-w-[850px]">
          As we are completely confident in the results our 3-step growth
          accelerator will produce, we are offering a 200% ROI guarantee. This
          means that if you do not earn AT LEAST 2x your initial investment by
          the end of the contract, we will work for free.
        </p>
      </div>
      <img
        className="w-[70%] min-w-[250px]"
        src={guartanteeIcon.src}
        alt="Contengine guarantee icon"
      />
    </div>
  );
};

export default Guarantee;
