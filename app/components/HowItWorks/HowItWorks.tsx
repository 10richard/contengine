import MainButton from "../MainButton";
import { HowItWorksList } from "./HowItWorksList";

const HowItWorks = () => {
  return (
    <section className="flex justify-center pt-28 pb-[450px] bg-[#F7F7F7]">
      <div className="w-5/6 flex flex-col items-center gap-16 text-center">
        <div className="grid gap-5 max-w-[550px]">
          <h1 className="text-5xl max-[500px]:text-4xl font-semibold">
            How Does it Work?
          </h1>
          <p>
            We design and implement a full funnel marketing strategy using our
            unique{" "}
            <strong className="text-primary">
              3-Step Framework based on the e-commerce sales formula.
            </strong>
          </p>
        </div>

        <div className="services-container grid gap-24 max-w-[750px]">
          <div className="flex flex-col bg-white">
            <span className="bg-primary w-full h-[15px] rounded-3xl"></span>
            <h2 className="min-[500px]:text-3xl font-extrabold px-10 py-5">
              REVENUE = TRAFFIC X CONVERSION X LTV
            </h2>
          </div>

          {HowItWorksList.map((process, idx) => (
            <div
              key={idx}
              className="service-container grid gap-5 relative px-5 py-16 bg-white"
            >
              <div
                className={`${
                  process.title == null ? "hidden" : ""
                } bg-primary table rounded-lg max-[425px]:px-10 px-16 py-5 mx-auto absolute left-0 right-0 top-0 translate-y-[-50%]`}
              >
                <h1 className="text-3xl max-[600px]:text-2xl text-white font-semibold">
                  {process.title}
                </h1>
              </div>

              <div className="grid place-items-center gap-10">
                <h2
                  className={`${
                    idx == 3 ? "italic" : ""
                  } text-3xl max-[600px]:text-2xl font-medium max-w-[550px]`}
                >
                  {process.heading}
                </h2>
                <p className="leading-relaxed min-[600px]:text-lg">
                  {process.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <MainButton bgColor="bg-primary" textColor="text-white" />
      </div>
    </section>
  );
};

export default HowItWorks;
