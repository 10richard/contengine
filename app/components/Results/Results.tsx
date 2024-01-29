import ResultContainer from "./ResultContainer";
import mattPeech from "@/public/images/results/matt-peech.jpeg";
import kennethSmith from "@/public/images/results/kenneth-smith.jpeg";
import antChaffee from "@/public/images/results/ant-chaffee.png";

const Results = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-[#E2E2E2]">
      <h2 className="text-center text-5xl max-[500px]:text-4xl font-semibold mb-[60px]">
        Results From Our Network
      </h2>
      <div className="flex flex-col items-center gap-24">
        <ResultContainer
          name="Matthew Peech"
          title="$652,720 Earned in 2023"
          about="Matthew Peech, a seasoned woodworker, specializes in guiding his audience through the intricacies of woodworking projects. His transition to offering digital products, particularly detailed woodworking plans, has significantly enhanced the clarity and direction he provides to his followers. By shifting to a digital product model, Matthew has been able to ensure that members receive comprehensive and actionable guidance, empowering them to create with confidence and skill."
          img={mattPeech.src}
          sub_count="477k"
          follower_count="160k"
        />
        <ResultContainer
          name="Kenneth Smith"
          title="$35.2k MRR in 3 Months"
          about="Kenneth Smith educates members on cleaning credit, building business credit, and secure substantial funding over $100,000 for their LLC’s. Kenneth Smith's shift to a paid community model allows him to create a more substantial impact by fostering a dedicated and invested audience. This approach enables him to deliver specialized, high-quality content, particularly in financial empowerment areas, ensuring that members receive focused and actionable insights."
          img={kennethSmith.src}
          sub_count="15.3k"
          follower_count="224k"
        />
        <ResultContainer
          name="Anthony Chaffee"
          title="$14.5k MRR in 1 Month"
          about="Anthony Chaffee, a medical doctor, specializes in the carnivore diet and its role in reversing chronic diseases. By transitioning to a paid community model, Dr. Chaffee has enhanced his ability to provide specialized, in-depth guidance on the carnivore diet. This approach not only bolsters his business by creating a dedicated platform for engaged individuals but also allows for a more personalized and impactful dissemination of his research and expertise in this specific nutritional field."
          img={antChaffee.src}
          sub_count="244k"
          follower_count="196k"
        />
      </div>
    </section>
  );
};

export default Results;
