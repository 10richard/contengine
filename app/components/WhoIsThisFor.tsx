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
          This is not for content creators that do not have at least{" "}
          <strong>100k</strong> cross-channel followers. The method outlined
          will not work. If you are in this category, we suggest focusing on
          content production before scaling offers.
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
              This is for established content creators that want to{" "}
              <strong className="text-primary">
                unlock a new stream of revenue
              </strong>
            </p>
            <p>
              If you love making content and want someone to{" "}
              <strong className="text-primary">
                handle the marketing and operations of the business
              </strong>
            </p>
            <p>
              If you created a great personal brand but:
              <br />
              a. Are{" "}
              <strong className="text-primary">
                too involved in the business
              </strong>
              <br />
              b.{" "}
              <strong className="text-primary">
                Not making as much as you hope to
              </strong>
            </p>
            <p>
              If you’ve got the industry's best kept secret but you’re still{" "}
              <strong className="text-primary">
                not effectively monetizing your audience
              </strong>
            </p>
            <p>
              If you’re looking to{" "}
              <strong className="text-primary">
                expand into new revenue heights
              </strong>{" "}
              but you don’t know the best way to so.
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
              and covering your expenses.
            </p>
            <p>
              If you’ve{" "}
              <strong className="text-primary">
                tried marketing before but never got it to work
              </strong>{" "}
              and think marketing doesn’t work!
            </p>
            <p>
              If you’re giving all you can but{" "}
              <strong className="text-primary">not getting the ROI</strong> you
              are putting in.
            </p>
            <p>
              If you’re{" "}
              <strong className="text-primary">
                tired of feeling burnt out
              </strong>{" "}
              and <strong className="text-primary">not being sure</strong> on
              what activates drive the business forward.
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
