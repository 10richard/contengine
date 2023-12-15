import zebra from "@/public/images/trusted-partners/zebra.png";
import michaelTodd from "@/public/images/trusted-partners/michael-todd-beauty.png";
import sa from "@/public/images/trusted-partners/sa.png";
import babeOriginals from "@/public/images/trusted-partners/babe-original.png";
import markBells from "@/public/images/trusted-partners/mark-bells-slingshot.png";
import mm from "@/public/images/trusted-partners/mm.png";
import nutricost from "@/public/images/trusted-partners/nutricost.png";
import jkBoots from "@/public/images/trusted-partners/jk-boots.png";
import leaseEnd from "@/public/images/trusted-partners/lease-end.png";

interface TrustedListProps {
  img_path: string;
  alt_text: string;
  classes: string;
}

export const TrustedList: TrustedListProps[] = [
  { img_path: zebra.src, alt_text: "Zebra", classes: "w-[150px]" },
  {
    img_path: michaelTodd.src,
    alt_text: "Michael Todd Beauty",
    classes: "w-[150px]",
  },
  { img_path: sa.src, alt_text: "SA", classes: "w-[150px]" },
  {
    img_path: babeOriginals.src,
    alt_text: "Babe Originals",
    classes: "w-[150px]",
  },
  {
    img_path: markBells.src,
    alt_text: "Mark Bell's Sling Shot",
    classes: "w-[150px]",
  },
  { img_path: mm.src, alt_text: "MM", classes: "w-[150px]" },
  { img_path: nutricost.src, alt_text: "Nutricost", classes: "w-[150px]" },
  { img_path: jkBoots.src, alt_text: "JK Boots", classes: "w-[150px]" },
  { img_path: leaseEnd.src, alt_text: "Lease End", classes: "w-[150px]" },
];
