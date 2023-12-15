import casestudy1 from "@/public/images/case-studies/case-study1.png";
import casestudy2 from "@/public/images/case-studies/case-study2.png";
import casestudy3 from "@/public/images/case-studies/case-study3.png";
import casestudy4 from "@/public/images/case-studies/case-study4.png";
import casestudy5 from "@/public/images/case-studies/case-study5.png";

interface CaseStudiesListProps {
  img_path: string;
}

export const CaseStudiesList: CaseStudiesListProps[] = [
  { img_path: casestudy1.src },
  { img_path: casestudy2.src },
  { img_path: casestudy3.src },
  { img_path: casestudy4.src },
  { img_path: casestudy5.src },
];
