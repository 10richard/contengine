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
          accelerator will produce, we are offering a{" "}
          <strong>NO RISK GUARANTEE</strong>. This means that if we don’t earn
          you money, you don’t pay us a cent.
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
