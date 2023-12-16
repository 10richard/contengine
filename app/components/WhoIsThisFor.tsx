import MainButton from "./MainButton";
import pieIcon from "@/public/images/pie-icon.svg";
import spiralIcon from "@/public/images/spiral-icon.svg";

const WhoIsThisFor = () => {
  return (
    <section className="grid place-items-center py-28">
      <div className="text-center grid gap-5 mb-12 w-4/6 max-w-[725px] min-w-[300px]">
        <h2 className="text-5xl max-[500px]:text-4xl font-semibold">
          Who is this for?
        </h2>
        <p className="text-xl max-[500px]:text-lg">
          This is not for ecommerce businesses that do not have happy customers.
          The method outlined will not work. If you are in this category, we
          suggest focusing on product development before scaling.
        </p>
      </div>

      <div className="grid min-[1075px]:grid-cols-2 min-[660px]:w-[73%] w-[90%] gap-10 mb-28">
        <div className="flex flex-col items-center gap-16 px-10 pt-12 pb-24 shadow-[0px_24px_70px_#0000001a] rounded-3xl">
          <img
            className="bg-[#E5E8E8] rounded-full p-[25px] w-[100px] self-center"
            src={pieIcon.src}
            alt="Pie icon"
          />

          <div className="grid gap-5 min-[450px]:text-lg">
            <p>
              This is for established E-commerce businesses that want to{" "}
              <strong className="text-primary">
                increase revenue by +300% YoY.
              </strong>
            </p>
            <p>
              If you are a product-based Founder and need to{" "}
              <strong className="text-primary">
                get your product into the hands of whoever needs it.
              </strong>
            </p>
            <p>
              If you’re a specialist or the best at what you do but{" "}
              <strong className="text-primary">
                haven’t reached your full potential.
              </strong>
            </p>
            <p>
              If you created a great product but:
              <br />
              a. Are{" "}
              <strong className="text-primary">
                too involved in the process
              </strong>
              <br />
              b.{" "}
              <strong className="text-primary">
                Need to get in front of more of the right people
              </strong>
            </p>
            <p>
              If you’ve got the industry's best kept secret but you're still{" "}
              <strong className="text-primary">
                losing to businesses with worse products.
              </strong>
            </p>
            <p>
              If you’re looking to{" "}
              <strong className="text-primary">
                expand into new territories
              </strong>{" "}
              but you don’t know the best way.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 px-10 pt-12 pb-24 shadow-[0px_24px_70px_#0000001a] rounded-3xl">
          <img
            className="bg-[#E5E8E8] rounded-full p-[25px] w-[100px] self-center"
            src={spiralIcon.src}
            alt="Pie icon"
          />

          <div className="grid gap-5 min-[450px]:text-lg">
            <p>
              If you're{" "}
              <strong className="text-primary">worried about cash flow</strong>{" "}
              and keeping your sales pipeline full.
            </p>
            <p>
              If you’ve{" "}
              <strong className="text-primary">
                tried ads before but never got it to work
              </strong>{" "}
              and think ads doesn’t work!
            </p>
            <p>
              If you’re giving all you can but{" "}
              <strong className="text-primary">not getting the ROI</strong> you
              are putting in.
            </p>
            <p>
              If you’re{" "}
              <strong className="text-primary">
                tired of your team moving slower than your vision
              </strong>{" "}
              and want them to{" "}
              <strong className="text-primary">
                focus on activities to drive the business forward.
              </strong>
            </p>
            <p>
              If you’re{" "}
              <strong className="text-primary">sick of burning money</strong> on
              agencies who overcharge, over promise and underdeliver.
            </p>
            <p>
              This is for people{" "}
              <strong className="text-primary">
                wanting to form long-lasting relationships.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <MainButton bgColor="bg-primary" textColor="text-white"></MainButton>
    </section>
  );
};

export default WhoIsThisFor;
