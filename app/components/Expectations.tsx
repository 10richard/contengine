import founderPortrait from "@/public/images/contengine-founder.png";

const Expectations = () => {
  return (
    <section className="expectations-section bg-[#EBEBEB] flex justify-center pt-20 relative">
      <div className="flex flex-col items-center gap-20 w-[90%] text-center">
        <h2 className="text-5xl max-[500px]:text-4xl font-semibold">
          What Should I Expect?
        </h2>

        <div className="expectations grid gap-5 max-w-[650px]">
          <div className="expectation-container">
            <p>
              <strong className="text-primary">
                Increased revenue and profits
              </strong>{" "}
              in 2-3 months
            </p>
          </div>
          <div className="expectation-container">
            <p>
              <strong className="text-primary">
                New marketing assets and systems
              </strong>{" "}
              that enable you to{" "}
              <strong className="text-primary">
                scale whilst reducing dependency on you
              </strong>
              , freeing you up to focus on priority tasks.
            </p>
          </div>
          <div className="expectation-container">
            <p>
              A proven{" "}
              <strong className="text-primary">
                growth strategy that accumulates free cash flow
              </strong>{" "}
              without guesswork and wasting time and money.
            </p>
          </div>
          <div className="expectation-container">
            <p>
              <strong className="text-primary">
                Increased enterprise value
              </strong>{" "}
              in preparation for any financial event coming up.
            </p>
          </div>
          <div className="expectation-container">
            <p>
              A new{" "}
              <strong className="text-primary">
                system that finds and converts your dream customers into loyal
                fans.
              </strong>
            </p>
          </div>
          <div className="expectation-container">
            <p>
              The ability to{" "}
              <strong className="text-primary">
                never compete as a commodity against competitors
              </strong>{" "}
              with an inferior service to yours ever again.
            </p>
          </div>
          <div className="expectation-container">
            <p>
              <strong className="text-primary">
                Streamlined sales channels
              </strong>{" "}
              in 3 months.
            </p>
          </div>
        </div>
      </div>

      <div className="flex max-[700px]:flex-col justify-center items-center gap-10 absolute bottom-0 right-0 left-0 mx-auto max-w-[700px]">
        <div className="min-[700px]:absolute top-[40%] left-[65%] text-center">
          <h2 className="text-xl font-bold">Dave Ten</h2>
          <em className="font-medium">
            Founder & CEO <br /> Contengine
          </em>
        </div>
        <img
          className="min-w-[350px] w-[65%] max-[699px]:w-[50%] max-[699px]:ml-[20px] -ml-10"
          src={founderPortrait.src}
          alt="Portrait of Dave Ten - Founder of Contengine"
        />
      </div>
    </section>
  );
};

export default Expectations;
