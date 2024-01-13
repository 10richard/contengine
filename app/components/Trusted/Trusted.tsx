import { TrustedList } from "./TrustedList";
import zebra from "@/public/images/trusted-partners/zebra.png";
import michaelTodd from "@/public/images/trusted-partners/michael-todd-beauty.png";
import sa from "@/public/images/trusted-partners/sa.png";
import babeOriginals from "@/public/images/trusted-partners/babe-original.png";
import markBells from "@/public/images/trusted-partners/mark-bells-slingshot.png";
import mm from "@/public/images/trusted-partners/mm.png";
import nutricost from "@/public/images/trusted-partners/nutricost.png";
import jkBoots from "@/public/images/trusted-partners/jk-boots.png";
import leaseEnd from "@/public/images/trusted-partners/lease-end.png";

const Trusted = () => {
  return (
    <section className="trusted bg-[#E2E2E2] flex justify-center py-28">
      <div className="grid justify-center place-items-center gap-20">
        <h2 className="font-semibold text-center text-5xl leading-tight max-[750px]:text-[2rem] max-[750px]:leading-tight px-5">
          Trusted By{" "}
          <span className="text-secondary">
            Leading E-commerce <br className="max-[567px]:hidden" /> Businesses
          </span>{" "}
          Around The Globe
        </h2>

        <div className="w-5/6 inline-flex flex-nowrap overflow-hidden max-[900px]:hidden">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img className="w-[150px]" src={zebra.src} alt="Heineken" />
            </li>
            <li>
              <img className="w-[125px]" src={michaelTodd.src} alt="Linkedin" />
            </li>
            <li>
              <img className="w-[125px]" src={sa.src} alt="Redbull" />
            </li>
            <li>
              <img className="w-[125px]" src={babeOriginals.src} alt="Revlon" />
            </li>
            <li>
              <img className="w-[125px]" src={markBells.src} alt="Spotify" />
            </li>
            <li>
              <img className="w-[100px]" src={mm.src} alt="Tesla" />
            </li>
            <li>
              <img className="w-[125px]" src={nutricost.src} alt="Netflix" />
            </li>
            {/* <li>
              <img className="w-[125px]" src={jkBoots.src} alt="Paypal" />
            </li> */}
            <li>
              <img className="w-[125px]" src={leaseEnd.src} alt="Sony" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img className="w-[150px]" src={zebra.src} alt="Heineken" />
            </li>
            <li>
              <img className="w-[125px]" src={michaelTodd.src} alt="Linkedin" />
            </li>
            <li>
              <img className="w-[125px]" src={sa.src} alt="Redbull" />
            </li>
            <li>
              <img className="w-[125px]" src={babeOriginals.src} alt="Revlon" />
            </li>
            <li>
              <img className="w-[125px]" src={markBells.src} alt="Spotify" />
            </li>
            <li>
              <img className="w-[100px]" src={mm.src} alt="Tesla" />
            </li>
            <li>
              <img className="w-[125px]" src={nutricost.src} alt="Netflix" />
            </li>
            {/* <li>
              <img className="w-[125px]" src={jkBoots.src} alt="Paypal" />
            </li> */}
            <li>
              <img className="w-[125px]" src={leaseEnd.src} alt="Sony" />
            </li>
          </ul>
        </div>

        {/* For smaller screens */}
        <div className="trusted-businesses flex justify-center items-center gap-10 flex-wrap w-5/6 min-[900px]:hidden">
          {TrustedList.map((partner, idx) => (
            <div key={idx}>
              <img
                className={`${partner.classes}`}
                src={partner.img_path}
                alt={partner.alt_text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
