import contengineLogo from "@/public/images/contengine-footer-logo.png";

const Footer = () => {
  return (
    <footer className="py-20 px-10 bg-[#F7F7F7] grid place-items-center gap-10 text-center">
      <img src={contengineLogo.src} alt="Contengine logo" />
      <div className="grid gap-5 max-w-[525px]">
        <p>
          We generate demand, optimize for conversions and increase revenue
          leaving you to focus on running your content business.
        </p>
        <a className="underline" href="">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
