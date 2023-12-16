import Guarantee from "../Guarantee";
import Accordion from "./Accordion";
import { FaqList } from "./FaqList";

const Faq = () => {
  return (
    <section className="bg-[#E2E2E2] flex justify-center pt-[450px] pb-28 relative">
      <Guarantee />
      <div className="grid place-items-center gap-16 w-full text-center">
        <h2 className="text-5xl max-[500px]:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-5 max-[800px]:w-full w-[800px] bg-white px-5 py-10">
          {FaqList.map((faq, idx) => (
            <Accordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
