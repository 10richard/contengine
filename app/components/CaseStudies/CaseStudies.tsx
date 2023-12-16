import MainButton from "../MainButton";
import { CaseStudiesList } from "./CaseStudiesList";

const PartnerResults = () => {
  return (
    <section className="bg-[#F7F7F7] py-20 flex justify-center items-center gap-10">
      <div className="grid place-items-center w-5/6 gap-10 text-center">
        <h2 className="font-semibold text-5xl max-[500px]:text-4xl leading-tight">
          Our Partner's Results
        </h2>

        <div className="case-studies-container grid gap-14 mb-5 max-w-[800px]">
          {CaseStudiesList.map((casestudy, idx) => (
            <img
              key={idx}
              src={casestudy.img_path}
              alt="Case Study of Contengine"
            />
          ))}
        </div>

        <MainButton bgColor="bg-primary" textColor="text-white" />
      </div>
    </section>
  );
};

export default PartnerResults;
